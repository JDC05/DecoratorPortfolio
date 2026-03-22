import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | B Joseph Decorators'
  }, [])

  return (
    <section className="min-h-[80vh] flex items-center bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Large decorative 404 */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end select-none animate-fade-in">
            <p
              className="font-heading font-semibold leading-none"
              style={{
                fontSize: 'clamp(7rem, 18vw, 14rem)',
                color: 'transparent',
                WebkitTextStroke: '1.5px #D6CCBA',
                letterSpacing: '-0.04em',
              }}
            >
              404
            </p>
          </div>

          {/* Divider — hidden on mobile, vertical on desktop */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="h-48 w-px bg-parchment-border" />
          </div>
          <div className="lg:hidden w-12 h-px bg-parchment-border" />

          {/* Content */}
          <div className="lg:col-span-6 animate-fade-up anim-d1">
            <p className="section-label mb-4">Lost your way?</p>
            <h1
              className="font-heading font-semibold text-ink leading-[0.95] mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              This page hasn't<br />
              <span className="italic" style={{ color: '#C4622D' }}>been decorated</span> yet.
            </h1>
            <div className="copper-rule mb-6" />
            <p className="text-ink-mid leading-relaxed mb-10 max-w-sm">
              The page you're looking for doesn't exist or may have moved. Head back and we'll point you in the right direction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="btn-primary">Back to Home</Link>
              <Link to="/contact" className="btn-ghost">Get in Touch</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
