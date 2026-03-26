import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'


function StarIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
        fill="#C4622D"
        stroke="#C4622D"
        strokeWidth="1.2"
      />
    </svg>
  )
}

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

const serviceGroups = [
  { number: '01', title: 'Painting & Decorating', items: paintingServices },
  { number: '02', title: 'Building & Property', items: buildingServices },
  { number: '03', title: 'Additional Home Services', items: additionalHomeServices },
]

function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const group = serviceGroups[activeIndex]

  return (
    <section className="bg-parchment border-t border-parchment-border">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-12">
        <Reveal>
          <div className="flex items-end gap-8">
            <div>
              <p className="section-label mb-3">What We Offer</p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink">Our Services</h2>
            </div>
            <div className="flex-1 h-px bg-parchment-border hidden md:block mb-3" />
          </div>
        </Reveal>
      </div>

      {/* Interactive panel */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <Reveal delay={0.1}>
          <div className="border border-parchment-border grid grid-cols-1 lg:grid-cols-5">

          {/* Left: category selector */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-parchment-border flex flex-col">
            {serviceGroups.map(({ number, title, items }, i) => {
              const isActive = activeIndex === i
              return (
                <button
                  key={number}
                  onClick={() => setActiveIndex(i)}
                  className="text-left px-6 lg:px-10 py-5 lg:py-8 border-b border-parchment-border last:border-0 transition-colors duration-300 relative"
                  style={{ backgroundColor: isActive ? '#EAE3D7' : 'transparent' }}
                >
                  {/* Active indicator bar — slides in from left */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
                    style={{
                      backgroundColor: '#C4622D',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />

                  <p
                    className="font-heading font-semibold leading-none transition-colors duration-300 hidden lg:block"
                    style={{ fontSize: '3rem', color: isActive ? '#C4622D' : '#D6CCBA' }}
                  >
                    {number}
                  </p>
                  <div className="flex items-center gap-3 lg:mt-2">
                    <span
                      className="font-heading font-semibold shrink-0 lg:hidden"
                      style={{ fontSize: '1rem', color: isActive ? '#C4622D' : '#D6CCBA' }}
                    >
                      {number}
                    </span>
                    <div>
                      <p
                        className="font-heading font-semibold transition-colors duration-200 text-base lg:text-xl leading-tight"
                        style={{ color: isActive ? '#1E1B16' : '#4A4438' }}
                      >
                        {title}
                      </p>
                      <p
                        className="mt-1 lg:hidden transition-colors duration-300"
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          fontFamily: 'Jost, sans-serif',
                          color: isActive ? '#C4622D' : '#8B7D6B',
                        }}
                      >
                        {items.length} services
                      </p>
                    </div>
                  </div>
                  <p
                    className="hidden lg:block mt-2 transition-colors duration-300"
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'Jost, sans-serif',
                      color: isActive ? '#C4622D' : '#8B7D6B',
                    }}
                  >
                    {items.length} services
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right: animated service list */}
          <div className="lg:col-span-3 p-8 lg:p-12 xl:p-16 min-h-[24rem]">
            {/* Panel header */}
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-parchment-border">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-ink">
                {group.title}
              </h3>
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: 'Jost, sans-serif',
                  color: '#8B7D6B',
                }}
              >
                {group.items.length} services
              </span>
            </div>

            {/* Items — key forces remount → animation replay on category change */}
            <ul key={activeIndex}>
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-5 py-3 border-b border-parchment-border last:border-0 animate-fade-up"
                  style={{ animationDelay: `${i * 0.045}s`, opacity: 0 }}
                >
                  <span
                    className="font-heading font-semibold shrink-0 tabular-nums"
                    style={{ fontSize: '0.78rem', color: '#D6CCBA', width: '2rem', marginTop: '0.1rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-mid text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Painters & Decorators Bedfordshire | B Joseph Decorators'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Professional painters and decorators serving Bedfordshire, North & West London, Middlesex and Hertfordshire. 20+ years experience. Free no-obligation quotes. TrustATrader verified.')
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: headline */}
            <div className="lg:col-span-8">
              <p className="section-label mb-4 animate-fade-up">
                B Joseph Decorators · Est. 2007 · Bedfordshire &amp; London
              </p>
              <h1
                className="font-heading font-semibold text-ink leading-[0.9] mb-5 animate-fade-up anim-d1"
                style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
              >
                <span className="italic">Crafting</span>{' '}
                <span>spaces with</span>{' '}
                <span className="italic" style={{ color: '#C4622D' }}>precision.</span>
              </h1>
              <p className="text-ink-mid leading-relaxed max-w-xl mb-6 animate-fade-up anim-d2">
                Transforming homes and commercial spaces for over 20 years. Based in Bedfordshire, serving North &amp; West London, Middlesex, and Hertfordshire. Fully vetted by{' '}
                <a
                  href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper hover:text-copper-hover link-copper"
                >
                  TrustATrader
                </a>.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-up anim-d3">
                <Link to="/about" className="btn-primary">Our Story</Link>
                <Link to="/contact" className="btn-ghost">Free Quote</Link>
              </div>
            </div>

            {/* Right: trust stats */}
            <div className="lg:col-span-4 animate-fade-up anim-d3">
              {/* Mobile: horizontal 3-col row. Desktop: vertical list with left border */}
              <div className="grid grid-cols-3 lg:grid-cols-1 border-t lg:border-t-0 lg:border-l border-parchment-border lg:pl-8 divide-x lg:divide-x-0 divide-parchment-border">
                {[
                  { value: '20+', label: 'Years experience' },
                  { value: 'TT397', label: 'TrustATrader member' },
                  { value: '200+', label: 'Areas covered' },
                ].map(({ value, label }) => (
                  <div key={label} className="px-3 lg:px-0 py-5 lg:py-6 lg:border-b lg:border-parchment-border lg:last:border-0">
                    <p className="font-heading text-2xl lg:text-4xl font-semibold" style={{ color: '#C4622D' }}>{value}</p>
                    <p className="text-slate text-xs lg:text-sm mt-1 leading-snug" style={{ letterSpacing: '0.03em' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-parchment-border" />
      </section>

      {/* ── Services Showcase ── */}
      <ServicesShowcase />

      {/* ── TrustATrader Badge ── */}
      <section className="bg-parchment border-t border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 lg:gap-x-10 py-7 lg:py-8">

            {/* Brand */}
            <div className="flex flex-col items-center gap-0.5">
              <p className="section-label">Verified by</p>
              <a
                href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-lg lg:text-xl font-semibold text-ink hover:text-copper transition-colors duration-200"
              >
                TrustATrader
              </a>
            </div>

            <div className="hidden lg:block w-px self-stretch bg-parchment-border" />

            {/* Stars + rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={16} />
                ))}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-2xl lg:text-3xl font-semibold text-ink leading-none">4.93</span>
                <span className="text-slate" style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>out of 5</span>
              </div>
            </div>

            <div className="hidden lg:block w-px self-stretch bg-parchment-border" />

            {/* Review count */}
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-heading text-2xl lg:text-3xl font-semibold text-ink leading-none">73</span>
              <p className="text-slate" style={{ fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>
                Verified reviews
              </p>
            </div>

            <div className="hidden lg:block w-px self-stretch bg-parchment-border" />

            {/* 0 missed appointments */}
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-heading text-2xl lg:text-3xl font-semibold leading-none" style={{ color: '#C4622D' }}>0</span>
              <p className="text-slate text-center" style={{ fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>
                Missed appointments<br />in the past 6 months
              </p>
            </div>

            <div className="hidden lg:block w-px self-stretch bg-parchment-border" />

            {/* 18 year member */}
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-heading text-2xl lg:text-3xl font-semibold leading-none" style={{ color: '#C9A227' }}>18</span>
              <p className="text-slate" style={{ fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>
                Year member
              </p>
            </div>

          </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-parchment-dark border-t border-parchment-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <Reveal>
          <div className="flex items-end gap-8 mb-16">
            <div>
              <p className="section-label mb-3">What Clients Say</p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink">Testimonials</h2>
            </div>
            <div className="flex-1 h-px bg-parchment-border hidden md:block mb-3" />
          </div>
          </Reveal>

          <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-parchment-border border border-parchment-border">
            {[
              {
                quote: '"Really excellent work on our patio windows refinishing them, good weather proofing and lovely finish. Nice guy, worked hard and clear communication."',
                name: 'Francesca',
                date: '1st July 2025',
              },
              {
                quote: '"A very reliable and trustworthy man a pleasure to have in your house. Work completed on time to a very high standard"',
                name: 'Susan Fraser',
                date: '9th June 2025',
              },
              {
                quote: '"Joseph painted the outside of my house last summer to great acclaim from passers by and great appreciation from me. He\u2019s now back to do the inside"',
                name: 'Gail',
                date: '7th April 2025',
              },
              {
                quote: '"We are very pleased with the work Joseph did on our house. He repaired and painted our very tired sash windows, cases and sills. He revived the stonework and painted the exterior. He is a pleasure to deal with and clearly enjoys his work. Highly recommended."',
                name: 'Douglas Thomson',
                date: '17th February 2025',
              },
              {
                quote: '"Decorated a tired room and restored sash window to a high standard. Highly professional and excellent quality of work. Excellent advice with selecting the best paint colour for the space. He always works so hard to achieve the best results, I recommend him with no reservations and will definitely use this company again."',
                name: 'Brigid',
                date: '16th March 2024',
              },
              {
                quote: '"Great job fixing my sash window - very professional"',
                name: 'Hugo',
                date: '4th November 2023',
              },
            ].map(({ quote, name, date }) => (
              <div key={name} className="bg-parchment-dark p-8 lg:p-10 flex flex-col gap-6 hover:bg-parchment transition-colors duration-300">
                <p
                  className="font-heading italic leading-none select-none"
                  style={{ fontSize: '4rem', color: '#C4622D', opacity: 0.25, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </p>
                <p className="text-ink-mid leading-relaxed text-sm flex-1 -mt-4">
                  {quote}
                </p>
                <div className="border-t border-parchment-border pt-5">
                  <p className="font-heading text-base font-semibold text-ink">{name}</p>
                  <p className="text-slate" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif', marginTop: '0.2rem' }}>
                    {date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#1E1B16' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <p className="section-label mb-6" style={{ color: '#C4622D' }}>
                Ready to start?
              </p>
              <h2
                className="font-heading font-semibold leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#F4EFE6' }}
              >
                Let's bring your{' '}
                <span className="italic" style={{ color: '#C4622D' }}>vision</span>{' '}
                to life.
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(244,239,230,0.55)' }}>
                Contact us today for a free, no-obligation quote. We'd love to help with your project — from a single room to a full property redecoration.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:07793074516" className="btn-primary">
                  Call 077 9307 4516
                </a>
                <Link
                  to="/contact"
                  className="inline-block font-medium transition-all duration-200 hover:bg-parchment hover:text-ink"
                  style={{
                    border: '1px solid rgba(244,239,230,0.3)',
                    color: '#F4EFE6',
                    padding: '0.75rem 1.75rem',
                    fontSize: '0.78rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'Jost, system-ui, sans-serif',
                  }}
                >
                  Send a Message
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border-l border-copper/20 pl-8 space-y-6">
                {[
                  'Free written quotation',
                  'Fully insured & vetted',
                  'Domestic & commercial',
                  'Specialist restoration',
                ].map((item) => (
                  <p key={item} className="text-sm" style={{ color: 'rgba(244,239,230,0.5)', letterSpacing: '0.05em' }}>
                    — {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
