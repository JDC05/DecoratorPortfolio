import { useState } from 'react'

/**
 * This form uses Formspree for email delivery.
 * Steps to activate:
 *   1. Go to https://formspree.io and create a free account
 *   2. Create a new form and copy your form ID (e.g. "xpwdqvvn")
 *   3. Replace YOUR_FORMSPREE_ID below with your form ID
 */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

const contactDetails = [
  {
    icon: '📞',
    label: 'Phone',
    value: '07793 074 516',
    href: 'tel:07793074516',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@bjosephdecorators.co.uk',
    href: 'mailto:info@bjosephdecorators.co.uk',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors duration-200'

  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-mid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <div className="section-divider" />
          <p className="text-white/60 max-w-xl">
            Have a project in mind? Get in touch for a free, no-obligation quote and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Contact Details</h2>
            <div className="space-y-6">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-white/50 text-sm">{c.label}</p>
                    <a
                      href={c.href}
                      className="text-white hover:text-accent transition-colors duration-200 font-medium"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-navy-mid rounded-xl p-5 border border-white/10">
              <p className="text-accent font-semibold mb-2">Address</p>
              <address className="not-italic text-white/70 text-sm leading-relaxed">
                B Joseph Decorators Ltd<br />
                44 Chester Avenue<br />
                Luton<br />
                LU4 9SQ
              </address>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h2>

            {status === 'success' ? (
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60">
                  Thanks for getting in touch. We'll get back to you as soon as possible.
                </p>
                <button
                  className="btn-accent mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-sm mb-1" htmlFor="name">
                      Full Name <span className="text-accent">*</span>
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
                    <label className="block text-white/60 text-sm mb-1" htmlFor="phone">
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
                  <label className="block text-white/60 text-sm mb-1" htmlFor="email">
                    Email Address <span className="text-accent">*</span>
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
                  <label className="block text-white/60 text-sm mb-1" htmlFor="message">
                    Message <span className="text-accent">*</span>
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
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-accent w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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
