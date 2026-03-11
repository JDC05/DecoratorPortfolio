import { Link } from 'react-router-dom'

const paintingServices = [
  'Painting (interior)',
  'Paper hanging',
  'Repair holes and cracks',
  'Coving and cornice installation',
  'Rotten woodwork repair (Repair Care Specialist)',
  'Sash window restoration',
  'External painting using weathershield paints',
]

const buildingServices = [
  'Building maintenance',
  'Carpentry and joinery',
  'Rendering',
  'Plastering',
  'Insulation',
  'Sound proofing',
  'Masonry repairs',
  'Wall tiling',
  'All types of roofing and lead-work',
  'Installation of loft/roof windows',
  'Paving (driveways and gardens)',
  'Garden decking',
  'Pressure washing',
  'Sanding and varnishing original floorboards',
  'Laminate flooring installation',
  'Floor tiling',
]

const homeImprovementServices = [
  'Interior refurbishment',
  'Kitchen fitting',
  'Bathroom fitting',
  'Handyman',
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
              Welcome to B Joseph Decorators Ltd
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-4 leading-relaxed">
              We are a small professional painting and decorating company based in Bedfordshire but we also work throughout North London, West London, North West London, Middlesex and the Hertfordshire areas.
            </p>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
              With 8 years of experience in the trade, we are highly capable and willing to undertake any decorating work — from paper hanging to external painting, plastering and coving. Vetted and approved by 
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
            B Joseph Decorators undertakes both domestic and commercial projects and we specialise in the following areas:
          </p>
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
                  <span className="text-accent mt-0.5 shrink-0">›</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Home Improvements */}
          <div className="bg-navy-mid rounded-xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">Home Improvements</h3>
            <ul className="space-y-1">
              {homeImprovementServices.map((item) => (
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
