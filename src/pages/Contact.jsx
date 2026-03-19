import { useState, useRef, useEffect } from 'react'

const serviceOptions = [
  'Interior Painting & Decorating',
  'Exterior Painting',
  'Wallpaper Hanging',
  'Timber & Sash Window Restoration',
  'Plastering & Rendering',
  'Building & Property Maintenance',
  'Flooring',
  'Other / Not sure',
]

function ServiceSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = (option) => {
    onChange(option)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border-0 border-b py-3 text-sm bg-transparent transition-colors duration-200 text-left focus:outline-none"
        style={{ borderColor: open ? '#C4622D' : '#D6CCBA', color: value ? '#1E1B16' : '#8B7D6B' }}
      >
        <span>{value || 'Select a service…'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'none', color: '#8B7D6B' }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-20 border border-parchment-border mt-1 py-1"
          style={{ backgroundColor: '#F4EFE6' }}
        >
          {serviceOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => select(option)}
              className="w-full text-left px-4 py-3 text-sm transition-colors duration-150 hover:bg-parchment-dark"
              style={{
                fontFamily: 'inherit',
                color: option === value ? '#C4622D' : '#4A4438',
                backgroundColor: option === value ? 'rgba(196,98,45,0.06)' : undefined,
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * This form uses Web3Forms for email delivery — no account required.
 * Steps to activate (takes ~2 minutes):
 *   1. Go to https://web3forms.com
 *   2. Enter the email address you want submissions sent to
 *   3. Check your inbox and copy the access key from the confirmation email
 *   4. Replace YOUR_WEB3FORMS_ACCESS_KEY below with that key
 */
const WEB3FORMS_KEY = '7ee0e48f-9dfa-4af8-9675-68f72cb7bf45'

const contactDetails = [
  { label: 'Phone', value: '07793 074 516', href: 'tel:07793074516' },
  { label: 'Email', value: 'info@bjosephdecorators.co.uk', href: 'mailto:info@bjosephdecorators.co.uk' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-0 border-b border-parchment-border focus:border-copper focus:outline-none transition-colors duration-200 py-3 text-ink placeholder-slate text-sm'

  const labelClass =
    'block text-slate mb-1.5'

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment-dark border-b border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
          <p className="section-label mb-4 animate-fade-up">Get In Touch</p>
          <h1
            className="font-heading font-semibold text-ink leading-[0.9] animate-fade-up anim-d1"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Contact <span className="italic">Us</span>
          </h1>
          <div className="copper-rule mt-5 mb-4 animate-fade-up anim-d2" />
          <p className="text-ink-mid max-w-xl animate-fade-up anim-d3">
            Have a project in mind? Get in touch for a free, no-obligation quote and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Contact details sidebar */}
          <div>
            <p className="section-label mb-8">Details</p>
            <div className="space-y-8">
              {contactDetails.map((c) => (
                <div key={c.label}>
                  <p
                    className="text-slate mb-1.5"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                  >
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    className="font-heading text-xl font-semibold text-ink hover:text-copper transition-colors duration-200"
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-parchment-border">
              <p
                className="text-slate mb-3"
                style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
              >
                Address
              </p>
              <address className="not-italic text-ink-mid leading-relaxed font-heading text-lg">
                B Joseph Decorators<br />
                44 Chester Avenue<br />
                Luton, LU4 9SQ
              </address>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <p className="section-label mb-8">Send a Message</p>

            {status === 'success' ? (
              <div className="border border-parchment-border p-12 text-center">
                <div className="copper-rule mx-auto mb-8" />
                <h3 className="font-heading text-3xl font-semibold text-ink mb-4">Message Sent</h3>
                <p className="text-ink-mid mb-8 leading-relaxed">
                  Thank you for getting in touch. We'll get back to you as soon as possible.
                </p>
                <button className="btn-ghost" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      className={labelClass}
                      htmlFor="name"
                      style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                    >
                      Full Name <span className="text-copper">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      className={labelClass}
                      htmlFor="phone"
                      style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07700 000000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="email"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                  >
                    Email Address <span className="text-copper">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="service"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                  >
                    Type of Work
                  </label>
                  <ServiceSelect
                    value={form.service}
                    onChange={(val) => setForm({ ...form, service: val })}
                  />
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="message"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}
                  >
                    Message <span className="text-copper">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — what needs decorating, any specific requirements, and the best time to call..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-copper text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
