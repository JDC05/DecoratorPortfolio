import { Link } from 'react-router-dom'

const paintingServices = [
  'Interior painting',
  'Exterior painting with durable weathershield coatings',
  'Wallpaper hanging',
  'Coving and cornice installation',
  'Hole and crack repair',
  'Timber repair and restoration (Repair Care Specialist)',
  'Sash window restoration',
]

const buildingServices = [
  'General building maintenance',
  'Plastering and rendering',
  'Masonry repair and restoration',
  'Carpentry and joinery',
  'Insulation installation',
  'Soundproofing',
  'Wall and floor tiling',
  'Roofing and leadwork (all types)',
  'Loft and roof window installation',
  'Paving for driveways and garden areas',
  'Garden decking',
  'Pressure washing and exterior cleaning',
  'Original floorboard sanding and varnishing',
  'Laminate flooring installation',
]

const additionalHomeServices = [
  'Interior refurbishment and redecoration',
  'Kitchen painting and finishing',
  'Bathroom painting and finishing',
  'Handyman services',
]


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-mid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              B Joseph Decorators – London
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to B Joseph Decorators
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-4 leading-relaxed">
              Transforming homes and commercial spaces for over 20 years, B Joseph Decorators is a trusted painting and decorating company based in Bedfordshire and proudly serving North London, West London, North‑West London, Middlesex, and Hertfordshire.
            </p>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
              We bring craftsmanship, care, and attention to every project, whether it’s a single room refresh, full property redecoration, or specialist restoration work. From wallpaper hanging and interior painting to exterior finishes, plastering, coving, and more, we deliver results that stand the test of time. Fully vetted and approved by 
              <a
              href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
              target="_blank"
              rel="noopener noreferrer"
              >
              <span className="text-accent font-semibold"> TrustATrader</span>.
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-accent">More About Us</Link>
              <Link to="/contact" className="btn-outline">Get a Free Quote</Link>
            </div>
          </div>
        </div>

        {/* Decorative accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="section-title">Decorators London Services</h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/60 max-w-2xl mx-auto">
            B Joseph Decorators undertakes both domestic and commercial work, offering a comprehensive range of decorating and property maintenance services.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Painting & Decorating */}
          <div className="bg-navy-mid rounded-xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300">
            <div className="text-3xl mb-3">🖌️</div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">Painting &amp; Decorating</h3>
            <ul className="space-y-1">
              {paintingServices.map((item) => (
                <li key={item} className="text-white/60 text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">›</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Building & Property */}
          <div className="bg-navy-mid rounded-xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">Building &amp; Property</h3>
            <ul className="space-y-1">
              {buildingServices.map((item) => (
                <li key={item} className="text-white/60 text-sm flex items-start gap-2">
                  <span className="text-accent shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Home Services */}
          <div className="bg-navy-mid rounded-xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">Additional Home Services</h3>
            <ul className="space-y-1">
              {additionalHomeServices.map((item) => (
                <li key={item} className="text-white/60 text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">›</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="section-title text-white">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact us today for a free, no-obligation quote. We'd love to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:07793074516" className="btn-accent">Call 07793 074 516</a>
            <Link to="/contact" className="btn-outline">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
