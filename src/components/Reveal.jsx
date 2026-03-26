import { useEffect, useRef } from 'react'

/**
 * Wraps children and fades them up into view when they enter the viewport,
 * mirroring the hero's animate-fade-up behaviour.
 *
 * Props:
 *   delay  – animation-delay in seconds (default 0)
 *   as     – HTML tag to render (default 'div')
 *   className – extra classes forwarded to the wrapper
 */
export default function Reveal({ children, className, delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}s`
          el.classList.add('is-revealed')
          io.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -24px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`scroll-reveal${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  )
}
