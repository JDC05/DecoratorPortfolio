import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-parchment-dark border-t border-parchment-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-ink mb-3">B.Joseph Decorators</h3>
            <p className="text-slate text-sm leading-relaxed">
              Professional decorating and property maintenance services across Bedfordshire and London. Est. 2007.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/coverage', label: 'Coverage' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ink-mid hover:text-copper link-copper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Get In Touch</p>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:07793074516" className="text-ink-mid hover:text-copper transition-colors duration-200 block">
                  07793 074 516
                </a>
              </li>
              <li>
                <a href="mailto:info@bjosephdecorators.co.uk" className="text-ink-mid hover:text-copper transition-colors duration-200 break-all block">
                  info@bjosephdecorators.co.uk
                </a>
              </li>
              <li className="text-slate leading-relaxed pt-1">
                44 Chester Avenue<br />Luton, LU4 9SQ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-parchment-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>
          <span>© {year} B.Joseph Decorators. All rights reserved.</span>
          <span>TrustATrader Member · No. TT397</span>
        </div>
      </div>
    </footer>
  )
}
