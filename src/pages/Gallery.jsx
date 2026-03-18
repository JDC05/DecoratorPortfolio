import { useState, useEffect, useRef, useCallback } from 'react'

const PAGE_SIZE = 50

const modules = import.meta.glob('../assets/gallery/**/*.{jpeg,jpg,png,webp,mp4}', { eager: true })

const images = Object.entries(modules).map(([path, module]) => {
  const folder = path.split('/').at(-2)
  const category = folder.charAt(0).toUpperCase() + folder.slice(1)
  const type = path.endsWith('.mp4') ? 'video' : 'image'
  return { src: module.default, caption: category, category, type }
})

const categories = ['All', 'Interior', 'Exterior', 'Videos']

function GalleryImage({ item, index, onClick }) {
  return (
    <div
      className="relative overflow-hidden aspect-[4/3] cursor-pointer group border border-parchment-border hover:border-copper/40 transition-colors duration-300"
      onClick={() => onClick(index)}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {item.type === 'video' && (
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

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef(null)

  const filtered = activeCategory === 'All'
    ? images
    : activeCategory === 'Videos'
      ? images.filter((img) => img.type === 'video')
      : images.filter((img) => img.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeCategory])

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, filtered.length))
  }, [filtered.length])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore() },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMore])

  const openLightbox = (index) => {
    if (filtered[index].src) setLightbox(index)
  }

  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1))
  const next = () => setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0))

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
          {categories.map((cat) => {
            const count = cat === 'All'
              ? images.length
              : cat === 'Videos'
                ? images.filter(i => i.type === 'video').length
                : images.filter(i => i.category === cat).length
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

        {/* Grid */}
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
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(30,27,22,0.97)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-parchment/50 hover:text-copper transition-colors"
            style={{ fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-parchment/50 hover:text-copper transition-colors px-2 z-10"
            style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            {filtered[lightbox].type === 'video' ? (
              <video
                key={filtered[lightbox].src}
                src={filtered[lightbox].src}
                controls
                autoPlay
                className="max-h-[80vh] max-w-full"
              />
            ) : (
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                className="max-h-[80vh] max-w-full object-contain"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-parchment/50 hover:text-copper transition-colors px-2 z-10"
            style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
