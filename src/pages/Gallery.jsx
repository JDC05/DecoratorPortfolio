import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'

const PAGE_SIZE = 50

const allModules = import.meta.glob('../assets/gallery/**/*.{jpeg,jpg,png,webp,mp4}', { eager: true })

// Separate before-after images (in subfolders) from regular images
const beforeAfterRaw = {}
const regularImages = []

Object.entries(allModules).forEach(([path, module]) => {
  const parts = path.split('/')
  const folder = parts.at(-2)
  const grandFolder = parts.at(-3)

  if (grandFolder === 'before-after') {
    if (!beforeAfterRaw[folder]) beforeAfterRaw[folder] = []
    const stem = parts.at(-1).replace(/\.[^.]+$/, '').toLowerCase()
    beforeAfterRaw[folder].push({ src: module.default, stem })
  } else {
    const category = folder.charAt(0).toUpperCase() + folder.slice(1)
    const type = path.endsWith('.mp4') ? 'video' : 'image'
    regularImages.push({ src: module.default, caption: category, category, type })
  }
})

function getPhase(stem) {
  if (stem.includes('before')) return 0
  if (stem.includes('after')) return 1
  return 2
}

function getPhaseLabel(stem) {
  if (stem.includes('before')) return 'Before'
  if (stem.includes('after')) return 'After'
  return ''
}

const beforeAfterProjects = Object.entries(beforeAfterRaw).map(([name, imgs]) => {
  const sorted = [...imgs].sort((a, b) => {
    const pa = getPhase(a.stem)
    const pb = getPhase(b.stem)
    return pa !== pb ? pa - pb : a.stem.localeCompare(b.stem)
  })
  return { name, images: sorted }
})

const categories = ['All', 'Before-After', 'Interior', 'Exterior', 'Videos']

function GalleryImage({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="relative overflow-hidden aspect-[4/3] cursor-pointer group border border-parchment-border hover:border-copper/40 transition-colors duration-300"
      onClick={() => onClick(index)}
    >
      {/* Skeleton placeholder */}
      {!loaded && <div className="absolute inset-0 skeleton-pulse" />}

      {item.type === 'video' ? (
        <video
          src={item.src}
          muted
          playsInline
          onLoadedData={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      {item.type === 'video' && loaded && (
        <span
          className="absolute top-3 right-3 bg-ink/70 text-parchment px-2.5 py-1 pointer-events-none"
          style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
        >
          Video
        </span>
      )}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-colors duration-300" />
    </div>
  )
}

function BeforeAfterProject({ project, onImageClick }) {
  const colClass = project.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
  return (
    <div className="border border-parchment-border p-4">
      <div className={`grid ${colClass} gap-2`}>
        {project.images.map((img, i) => {
          const label = getPhaseLabel(img.stem)
          return (
            <div
              key={i}
              className="relative cursor-pointer group"
              onClick={() => onImageClick(project, i)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={label || 'Photo'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/8 transition-colors duration-300" />
              </div>
              {label && (
                <span
                  className="absolute bottom-2 left-2 bg-ink/70 text-parchment px-2 py-0.5"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                >
                  {label}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.title = 'Gallery | B Joseph Decorators'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Browse our gallery of painting, decorating, and restoration projects across Bedfordshire and London. Interior, exterior, before-and-after transformations.')
  }, [])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [baLightbox, setBaLightbox] = useState(null) // { project, index }
  const sentinelRef = useRef(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return regularImages
    if (activeCategory === 'Videos') return regularImages.filter(i => i.type === 'video')
    if (activeCategory === 'Before-After') return []
    return regularImages.filter(i => i.category === activeCategory)
  }, [activeCategory])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  useEffect(() => { setVisibleCount(PAGE_SIZE) }, [activeCategory])

  const loadMore = useCallback(() => {
    setVisibleCount(c => Math.min(c + PAGE_SIZE, filtered.length))
  }, [filtered.length])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) loadMore() },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMore])

  const openLightbox = index => { if (filtered[index]?.src) setLightbox(index) }
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => (i > 0 ? i - 1 : filtered.length - 1)), [filtered.length])
  const next = useCallback(() => setLightbox(i => (i < filtered.length - 1 ? i + 1 : 0)), [filtered.length])

  const openBaLightbox = (project, index) => setBaLightbox({ project, index })
  const closeBaLightbox = useCallback(() => setBaLightbox(null), [])
  const baPrev = useCallback(() => setBaLightbox(s => ({ ...s, index: s.index > 0 ? s.index - 1 : s.project.images.length - 1 })), [])
  const baNext = useCallback(() => setBaLightbox(s => ({ ...s, index: s.index < s.project.images.length - 1 ? s.index + 1 : 0 })), [])

  useEffect(() => {
    if (lightbox !== null || baLightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox, baLightbox])

  useEffect(() => {
    if (lightbox === null && baLightbox === null) return
    const onKey = e => {
      if (lightbox !== null) {
        if (e.key === 'ArrowLeft') prev()
        else if (e.key === 'ArrowRight') next()
        else if (e.key === 'Escape') closeLightbox()
      } else {
        if (e.key === 'ArrowLeft') baPrev()
        else if (e.key === 'ArrowRight') baNext()
        else if (e.key === 'Escape') closeBaLightbox()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, baLightbox, prev, next, closeLightbox, baPrev, baNext, closeBaLightbox])

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment-dark border-b border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
          <p className="section-label mb-4 animate-fade-up">Our Projects</p>
          <h1
            className="font-heading font-semibold text-ink leading-[0.9] animate-fade-up anim-d1"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Gallery
          </h1>
          <div className="copper-rule mt-5 mb-4 animate-fade-up anim-d2" />
          <p className="text-ink-mid max-w-xl animate-fade-up anim-d3">
            A selection of our recent work — interior, exterior, flooring and building projects across Bedfordshire and London.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* Category tabs */}
        <div className="flex flex-wrap gap-0 mb-12 border-b border-parchment-border">
          {categories.map(cat => {
            const count = cat === 'All'
              ? regularImages.length
              : cat === 'Videos'
                ? regularImages.filter(i => i.type === 'video').length
                : cat === 'Before-After'
                  ? beforeAfterProjects.length
                  : regularImages.filter(i => i.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3.5 transition-all duration-200 border-b-2 -mb-px ${
                  activeCategory === cat
                    ? 'border-copper text-copper'
                    : 'border-transparent text-ink-mid hover:text-ink'
                }`}
                style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Jost, system-ui, sans-serif' }}
              >
                {cat === 'All' ? 'All Work' : cat}
                <span className="ml-2 opacity-40">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Before-After project cards */}
        {activeCategory === 'Before-After' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterProjects.map(project => (
              <BeforeAfterProject key={project.name} project={project} onImageClick={openBaLightbox} />
            ))}
          </div>
        ) : (
          <>
            {/* Regular image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {visible.map((item, i) => (
                <GalleryImage key={`${item.src}-${i}`} item={item} index={i} onClick={openLightbox} />
              ))}
            </div>
            {hasMore && <div ref={sentinelRef} className="h-10" />}
            <p
              className="text-center mt-10"
              style={{ color: '#8B7D6B', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
            >
              Showing {visible.length} of {filtered.length}
            </p>
          </>
        )}
      </section>

      {/* ── Regular Lightbox ── */}
      {lightbox !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(30,27,22,0.97)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-parchment/50 hover:text-copper transition-colors"
            style={{ fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}
            onClick={closeLightbox}
            aria-label="Close"
          >×</button>
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200
              w-11 h-11 md:w-auto md:h-auto
              text-parchment md:text-parchment/50
              hover:text-copper md:hover:text-copper
              active:scale-95"
            style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >‹</button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
            {filtered[lightbox].type === 'video' ? (
              <video
                key={filtered[lightbox].src}
                src={filtered[lightbox].src}
                controls
                autoPlay
                className="max-h-[80vh] max-w-full animate-fade-in"
              />
            ) : (
              <img
                key={filtered[lightbox].src}
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                className="max-h-[80vh] max-w-full object-contain animate-fade-in"
              />
            )}
            <p
              className="text-center mt-4"
              style={{ color: 'rgba(244,239,230,0.4)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
            >
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200
              w-11 h-11 md:w-auto md:h-auto
              text-parchment md:text-parchment/50
              hover:text-copper md:hover:text-copper
              active:scale-95"
            style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
          >›</button>
        </div>,
        document.body
      )}

      {/* ── Before-After Lightbox ── */}
      {baLightbox !== null && (() => {
        const { project, index } = baLightbox
        const img = project.images[index]
        const label = getPhaseLabel(img.stem)
        return createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(30,27,22,0.97)' }}
            onClick={closeBaLightbox}
          >
            <button
              className="absolute top-6 right-6 text-parchment/50 hover:text-copper transition-colors"
              style={{ fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}
              onClick={closeBaLightbox}
              aria-label="Close"
            >×</button>
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200
                w-11 h-11 md:w-auto md:h-auto
                text-parchment md:text-parchment/50
                hover:text-copper md:hover:text-copper
                active:scale-95"
              style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
              onClick={e => { e.stopPropagation(); baPrev() }}
              aria-label="Previous"
            >‹</button>
            <div className="max-w-5xl max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
              <img
                key={img.src}
                src={img.src}
                alt={label || 'Photo'}
                className="max-h-[80vh] max-w-full object-contain animate-fade-in"
              />
              <p
                className="text-center mt-4"
                style={{ color: 'rgba(244,239,230,0.4)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
              >
                {label ? `${label} · ` : ''}{index + 1} / {project.images.length}
              </p>
            </div>
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200
                w-11 h-11 md:w-auto md:h-auto
                text-parchment md:text-parchment/50
                hover:text-copper md:hover:text-copper
                active:scale-95"
              style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
              onClick={e => { e.stopPropagation(); baNext() }}
              aria-label="Next"
            >›</button>
          </div>,
          document.body
        )
      })()}
    </>
  )
}
