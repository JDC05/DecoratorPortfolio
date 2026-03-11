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

const categoryLabels = {
  All: 'All Work',
  Interior: 'Interior',
  Exterior: 'Exterior',
  Videos: 'Videos',
}

function GalleryImage({ item, index, onClick }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group border border-white/10"
      onClick={() => onClick(index)}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      {item.type === 'video' && (
        <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full pointer-events-none">
          ▶ Video
        </span>
      )}
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

  // Reset count when category changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeCategory])

  // Infinite scroll via IntersectionObserver
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
      {/* Page hero */}
      <section className="bg-navy-mid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Projects</p>
          <h1 className="section-title">Gallery</h1>
          <div className="section-divider" />
          <p className="text-white/60 max-w-xl">
            A selection of our recent work — interior, exterior, flooring and building projects across Bedfordshire and London.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                activeCategory === cat
                  ? 'bg-accent border-accent text-white'
                  : 'bg-transparent border-white/20 text-white/60 hover:border-accent/50 hover:text-white'
              }`}
            >
              {categoryLabels[cat]}
              <span className="ml-2 text-xs opacity-70">
                ({cat === 'All' ? images.length : images.filter(i => i.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((item, i) => (
            <GalleryImage key={`${item.src}-${i}`} item={item} index={i} onClick={openLightbox} />
          ))}
        </div>

        {/* Sentinel for infinite scroll */}
        {hasMore && <div ref={sentinelRef} className="h-10" />}

        {/* Item count */}
        <p className="text-white/30 text-sm text-center mt-8">
          Showing {visible.length} of {filtered.length} items
        </p>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors px-2"
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
                className="max-h-[80vh] max-w-full rounded-xl"
              />
            ) : (
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                className="max-h-[80vh] max-w-full object-contain rounded-xl"
              />
            )}
            <p className="text-white text-center mt-3 font-medium">{filtered[lightbox].caption}</p>
            <p className="text-white/40 text-center text-sm mt-1">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors px-2"
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
