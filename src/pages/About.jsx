import { Link } from 'react-router-dom'
import repairLogo from '/src/assets/repair.jpg'
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
              We are a small professional painting and decorating business based in Bedfordshire, covering North London, West London and North West London, as well as Middlesex and the Hertfordshire areas.
            </p>
            <p>
              With 8 years of experience in the trade, B Joseph Decorators are highly capable and conscientious, and willing to undertake any decorating work — from paper hanging to external painting, plastering and coving. Whether you need interior or exterior decorating, we are always available to offer helpful advice on colours or materials, or to provide free quotes and estimates.
            </p>
            <p>
              We are a highly skilled professional company. Our attention to detail ensures we pride ourselves in providing a high standard of workmanship and quality service to all our customers, regardless of the size of the job. Customer satisfaction is our priority. We are members of the Painting and Decorating Association, have full public liability insurance, and are vetted and approved by TrustATrader.
            </p>
            <p>
              We will always work closely with the client to ensure their requirements are always met and keep them fully updated throughout the project and quickly advise them if there is additional work to be done.
            </p>
            <p>
              We provide our customers with a free detailed written no obligation competitive quote. We also can provide you with advice on all your decorating and building maintenance needs.
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
                  Customer Service is extremely important to us here at B Joseph Decorators Ltd. We offer our customers professional reliable advice on their decorating needs from what paint to use through to repair techniques to save customers money and to get the best results.
                </p>
                <p className="text-white font-semibold">B Joseph Decorators Ltd guarantee our service to be:</p>
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
                  <img
                    src={repairLogo}
                    alt="Repair Care International"
                    className="shrink-0"
                  />
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Repair Care International</p>
                    <p>
                      B Joseph Decorators Ltd use Repair Care International's revolutionary Window Care Systems technique to restore old, run down or even rotten exterior woodwork to its former glory. Our knowledge and expertise enables property owners to retain original windows, doors and woodwork — a more affordable and environmentally friendly solution to installing replacements.
                    </p>
                    <p>
                      It can also extend the length of time between maintenance cycles from 3–5 years to 7–10 years.
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
                    <img src={TrustATraderLogo} alt="TrustATrader"/>
                  </a>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">
                      TrustATrader
                    </p>
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
                    <div className="pt-2 text-sm text-white/50 space-y-0.5">
                      <p><span className="text-white/70">Insurance:</span> Painter &amp; Decorator — Simply Business Insurance</p>
                    </div>
                    <a
                      href="https://www.trustatrader.com/traders/b-joseph-decorating-painters-and-decorators-barnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-accent text-sm hover:underline"
                    >
                      View our TrustATrader profile →
                    </a>
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
