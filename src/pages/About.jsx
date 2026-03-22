import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import repairCareLogo from '/src/assets/repaircare.svg'
import TrustATraderLogo from '/src/assets/TrustATrader.svg'

const promises = [
  'Honest and Trustworthy',
  'Efficient and Reliable',
  'Committed and Dedicated',
  'Clean and Pleasant',
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us | B Joseph Decorators'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'B Joseph Decorators — over 20 years of craftsmanship in painting, decorating and property maintenance. TrustATrader verified and Repair Care certified specialists.')
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment-dark border-b border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
          <p className="section-label mb-4 animate-fade-up">Who We Are</p>
          <h1
            className="font-heading font-semibold text-ink leading-[0.9] animate-fade-up anim-d1"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            About <span className="italic">B.Joseph</span> Decorators
          </h1>
          <div className="copper-rule mt-5 animate-fade-up anim-d2" />
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Main copy */}
          <div className="lg:col-span-7">
            <p className="section-label mb-4">Our Company</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-8 leading-tight">
              Built on craftsmanship,<br />
              <span className="italic">reliability &amp; quality.</span>
            </h2>
            <div className="space-y-5 text-ink-mid leading-relaxed">
              <p>
                B Joseph Decorators is built on craftsmanship, reliability, and a genuine commitment to quality. With decades of experience, we've earned a reputation for delivering exceptional results across the full spectrum of decorating and maintenance services.
              </p>
              <p>
                Whether it's wallpapering, interior and exterior painting, plastering, coving, or specialist restoration, we approach every project with precision and pride. Our team offers expert guidance on colour schemes, materials, and finishes, along with free, no-obligation quotes.
              </p>
              <p>
                We are fully insured, vetted, and approved by TrustATrader, giving our clients complete peace of mind.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/gallery" className="btn-primary">See Our Work</Link>
              <Link to="/contact" className="btn-ghost">Get in Touch</Link>
            </div>
          </div>

          {/* Side callouts */}
          <div className="lg:col-span-5 space-y-8 lg:pt-14">
            <div className="border-l-2 border-copper pl-6">
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                Specialists in Timber Window Restoration
              </h3>
              <p className="text-ink-mid text-sm leading-relaxed">
                Instead of replacing original wooden window, often at significant cost, we use the industry‑leading Repair Care system to restore them to their former glory. This advanced, sustainable method preserves the character of your property while delivering a long‑lasting, high‑quality finish.
              </p>
            </div>
            <div className="border-l-2 border-parchment-border pl-6">
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                Clear Communication, Every Step of the Way
              </h3>
              <p className="text-ink-mid text-sm leading-relaxed">
                We believe great service is built on transparency. Throughout your project, we keep you informed, ensure your requirements are fully understood, and discuss any additional work before proceeding.
              </p>
              <p className="text-ink-mid text-sm leading-relaxed mt-2">Every client receives a detailed written quotation as standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Promise & Memberships ── */}
      <section className="bg-parchment-dark border-t border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Our Promise */}
            <div>
              <p className="section-label mb-5">Our Promise</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6 leading-tight">
                A service you<br /><span className="italic">can rely on.</span>
              </h2>
              <p className="text-ink-mid mb-10 leading-relaxed">
                At B Joseph Decorators, customer service is at the heart of everything we do. We offer honest, practical advice, from paint selection to repair techniques, ensuring you achieve the best possible results and value.
              </p>
              <ul className="space-y-5">
                {promises.map((item, i) => (
                  <li key={item} className="flex items-center gap-5 border-b border-parchment-border pb-5 last:border-0 last:pb-0">
                    <span
                      className="font-heading font-semibold shrink-0 leading-none"
                      style={{ fontSize: '2rem', color: '#D6CCBA', width: '3rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-mid font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Memberships */}
            <div>
              <p className="section-label mb-5">Memberships</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6 leading-tight">
                Trusted &amp;<br /><span className="italic">verified.</span>
              </h2>
              <div className="space-y-4">

                {/* Repair Care */}
                <div className="border border-parchment-border p-6 bg-parchment hover:border-copper/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <a
                      href="https://repair-care.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <img src={repairCareLogo} alt="Repair Care International" width="120" />
                    </a>
                    <div>
                      <a
                        href="https://repair-care.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-lg font-semibold text-ink hover:text-copper transition-colors block mb-2"
                      >
                        Repair Care International
                      </a>
                      <p className="text-ink-mid text-sm leading-relaxed">
                        We use Repair Care International’s Window Care Systems to restore damaged exterior woodwork, allowing homeowners to retain original windows, doors, and timber features. This eco‑friendly, cost‑effective approach extends maintenance cycles from 3–5 years to 7–10 years.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TrustATrader */}
                <div className="border border-parchment-border p-6 bg-parchment hover:border-copper/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <a
                      href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <img src={TrustATraderLogo} alt="TrustATrader" width="120" />
                    </a>
                    <div>
                      <a
                        href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-lg font-semibold text-ink hover:text-copper transition-colors block mb-1"
                      >
                        TrustATrader
                      </a>
                      <p className="text-copper mb-3" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', fontFamily: 'Jost, sans-serif', textTransform: 'uppercase' }}>
                        Member No. TT397
                      </p>
                      <ul className="space-y-1.5 text-sm text-ink-mid">
                        {[
                          'Verified 4th September 2007',
                          'Identification & address verified',
                          'Customer references checked',
                          'Insurance verified January 2026',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-copper shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
