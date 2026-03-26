import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import bjosephbanner from '/src/assets/bjosephbanner.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [menuOpen])

  const navClass = ({ isActive }) =>
    isActive
      ? 'text-copper border-b border-copper pb-0.5'
      : 'text-ink-mid hover:text-copper link-copper'

  return (
    <header ref={headerRef} className="bg-parchment border-b border-parchment-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={bjosephbanner} alt="B.Joseph Decorators" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navClass}
                end={link.to === '/'}
                style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Jost, system-ui, sans-serif' }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone — desktop */}
          <a
            href="tel:07793074516"
            className="hidden md:inline-flex items-center gap-2 text-copper hover:text-copper-hover transition-colors duration-200"
            style={{ fontSize: '0.82rem', letterSpacing: '0.04em', fontFamily: 'Jost, system-ui, sans-serif' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
            077 9307 4516
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-1.5 p-1 w-8 h-8"
          >
            <span
              className="block h-px bg-ink origin-center transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block h-px bg-ink transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-ink origin-center transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden bg-parchment-dark border-parchment-border overflow-hidden"
        style={{
          maxHeight: menuOpen ? '320px' : '0',
          opacity: menuOpen ? 1 : 0,
          borderTopWidth: menuOpen ? '1px' : '0',
          transition: menuOpen
            ? 'max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, border-top-width 0s 0s'
            : 'max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, border-top-width 0s 0.35s',
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Jost, system-ui, sans-serif' }}
              className={({ isActive }) =>
                isActive ? 'text-copper font-medium' : 'text-ink-mid hover:text-copper'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:07793074516"
            className="text-copper font-medium mt-1 pt-5 border-t border-parchment-border"
            style={{ fontSize: '0.85rem', fontFamily: 'Jost, system-ui, sans-serif' }}
          >
            077 9307 4516
          </a>
        </nav>
      </div>
    </header>
  )
}
