import { useState, useRef, useEffect, useCallback } from 'react'

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

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const contactDetails = [
  { label: 'Phone', value: '07793 074 516', href: 'tel:07793074516' },
  { label: 'WhatsApp', value: 'Message on WhatsApp', href: 'https://wa.me/447793074516' },
  { label: 'Email', value: 'info@bjosephdecorators.co.uk', href: 'mailto:info@bjosephdecorators.co.uk' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    document.title = 'Contact Us | B Joseph Decorators'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Get in touch with B Joseph Decorators for a free, no-obligation quote. Painters and decorators serving Bedfordshire, North & West London, Middlesex and Hertfordshire.')
  }, [])

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
                    target={c.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={c.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="font-heading text-xl font-semibold text-ink hover:text-copper transition-colors duration-200 flex items-center gap-2"
                  >
                    {c.label === 'WhatsApp' && (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                    )}
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
                {/* Honeypot — must be unchecked for real submissions */}
                <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex="-1" />
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
