import { Link } from 'react-router-dom'
import repairCareLogo from '/src/assets/repaircare.svg'
import TrustATraderLogo from '/src/assets/TrustATrader.svg'

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-mid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
          <h1 className="section-title">About B.Joseph Decorators</h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Our Company */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Our Company</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              B Joseph Decorators is built on craftsmanship, reliability, and a genuine commitment to quality. With decades of experience, we’ve earned a reputation for delivering exceptional results across the full spectrum of decorating and maintenance services.
            </p>
            <p>
              Whether it’s wallpapering, interior and exterior painting, plastering, coving, or specialist restoration, we approach every project with precision and pride. Our team offers expert guidance on colour schemes, materials, and finishes, along with free, no‑obligation quotes.
            </p>
            <p>
              We are fully insured, vetted, and approved by TrustATrader, giving our clients complete peace of mind.
            </p>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mt-6 mb-3">Specialists in Timber Window Restoration</h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Instead of replacing original wooden window, often at significant cost, we use the industry‑leading Repair Care system to restore them to their former glory. This advanced, sustainable method preserves the character of your property while delivering a long‑lasting, high‑quality finish.
            </p>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mt-6 mb-3">Clear Communication, Every Step of the Way</h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
            We believe great service is built on transparency. Throughout your project, we keep you informed, ensure your requirements are fully understood, and discuss any additional work before proceeding.
            </p>
            <p>
            Every client receives a detailed written quotation as standard.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/gallery" className="btn-accent">See Our Work</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Our Promise & Memberships */}
      <section className="bg-navy-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Our Promise – left */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">Our Promise</h2>
              <div className="section-divider mb-6" />
              <div className="text-white/70 leading-relaxed space-y-4">
                <p>
                  At B Joseph Decorators, customer service is at the heart of everything we do. We offer honest, practical advice, from paint selection to repair techniques, ensuring you achieve the best possible results and value.
                </p>
                <p className="text-white font-semibold">We guarantee a service that is:</p>
                <ul className="space-y-3">
                  {[
                    'Honest and Trustworthy',
                    'Efficient and Reliable',
                    'Committed and Dedicated',
                    'Clean and Pleasant',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Memberships – right */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">Memberships</h2>
              <div className="section-divider mb-6" />
              <div className="text-white/70 leading-relaxed space-y-6">

                {/* Repair Care International */}
                <div className="flex items-start gap-6">
                  <a
                    href="https://repair-care.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 group"
                    aria-label="View B Joseph Decorators on repaircare"
                  >
                    <img src={repairCareLogo} alt="repaircare" width="150"/>
                  </a>
                  <div className="space-y-2">
                    <a
                      href="https://repair-care.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-white font-semibold">Repair Care International</p>
                    </a>
                    <p>
                      We use Repair Care International’s Window Care Systems to restore damaged exterior woodwork, allowing homeowners to retain original windows, doors, and timber features. This eco‑friendly, cost‑effective approach extends maintenance cycles from 3–5 years to 7–10 years.
                    </p>
                  </div>
                </div>

                {/* TrustATrader */}
                <div className="flex items-start gap-6 pt-6 border-t border-white/10">
                  <a
                    href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 group"
                    aria-label="View B Joseph Decorators on TrustATrader"
                  >
                    <img src={TrustATraderLogo} alt="TrustATrader" width="150"/>
                  </a>
                  <div className="space-y-2">
                    <a
                      href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-white font-semibold">
                        TrustATrader
                      </p>
                    </a>
                    <p className="text-white/50 text-sm">Membership No. <span className="text-accent font-mono">TT397</span></p>
                    <ul className="space-y-1 text-sm">
                      {[
                        'Verified on 4th September 2007',
                        'Identification checked',
                        'Company address verified',
                        'Customer references checked',
                        'Agreed to high standards &amp; complaints procedure',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 text-sm text-white/50 space-y-1">
                      <p><span className="text-white/70">Insurance Details:</span></p>
                      <p>Type: Painter &amp; Decorator</p>
                      <p>Provider: Simply Business Insurance</p>
                      <p>Verified: 26th January 2026</p>
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
