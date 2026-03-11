import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-mid border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">B.Joseph Decorators</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional decorating services across Bedfordshire and surrounding areas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-accent font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/coverage', label: 'Coverage' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-semibold mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:07793074516" className="hover:text-accent transition-colors duration-200">
                  📞 07793 074 516
                </a>
              </li>
              <li>
                <a href="mailto:info@bjosephdecorators.co.uk" className="hover:text-accent transition-colors duration-200 break-all">
                  ✉️ info@bjosephdecorators.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} B.Joseph Decorators. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
