import { useState, useEffect } from 'react'

const STORAGE_KEY = 'bjd-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash instantly on load
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      style={{ backgroundColor: '#1E1B16', borderTop: '1px solid rgba(196,98,45,0.25)' }}
      role="region"
      aria-label="Cookie notice"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,239,230,0.75)', fontFamily: 'Jost, sans-serif' }}>
            <span style={{ color: '#F4EFE6', fontWeight: 500 }}>Your privacy matters.</span>
            {' '}This site uses no tracking or advertising cookies.
            {' '}Contact form submissions are processed by{' '}
            <a
              href="https://web3forms.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C4622D', textDecoration: 'underline', textDecorationColor: 'rgba(196,98,45,0.4)' }}
            >
              Web3Forms
            </a>
            {' '}and fonts are served by Google Fonts.
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="ml-1 underline transition-colors duration-200"
                style={{ color: 'rgba(244,239,230,0.45)', fontFamily: 'Jost, sans-serif', fontSize: 'inherit', textDecorationColor: 'rgba(244,239,230,0.2)' }}
              >
                More info
              </button>
            )}
          </p>

          {expanded && (
            <p className="mt-2 text-xs leading-relaxed" style={{ color: 'rgba(244,239,230,0.45)', fontFamily: 'Jost, sans-serif' }}>
              When you submit the contact form, your name, email, phone number and message are sent to Web3Forms to be forwarded to our inbox — no data is stored beyond delivery. Google Fonts loads typefaces from Google's servers, which may log your IP address per{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(244,239,230,0.6)', textDecoration: 'underline' }}
              >
                Google's privacy policy
              </a>
              . We set a single cookie in your browser to remember that you've acknowledged this notice.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="transition-all duration-200 hover:bg-copper-hover"
            style={{
              backgroundColor: '#C4622D',
              color: '#F4EFE6',
              padding: '0.5rem 1.25rem',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Got it
          </button>
          <button
            onClick={accept}
            aria-label="Dismiss"
            className="transition-colors duration-200"
            style={{ color: 'rgba(244,239,230,0.3)', lineHeight: 1, fontSize: '1.4rem', fontWeight: 300 }}
          >
            ×
          </button>
        </div>

      </div>
    </div>
  )
}
