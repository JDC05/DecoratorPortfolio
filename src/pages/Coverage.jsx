import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const areas = [
  'Aley Green', 'Ampthill', 'Apsley End', 'Arlesey', 'Aspley Guise', 'Aspley Heath',
  'Astwick', 'Barton-le-Clay', 'Battlesden', 'Beadlow', 'Bedford', 'Beeston',
  'Begwary', 'Biddenham', 'Bidwell', 'Biggleswade', 'Billington', 'Bletsoe',
  'Blunham', 'Bolnhurst', 'Bourne End', 'Box End', 'Brickhill', 'Brogborough',
  'Bromham', 'Broom', 'Budna', 'Caddington', 'California', 'Campton',
  'Cardington', 'Carlton', 'Castle', 'Cauldwell', 'Chalgrave', 'Chalton',
  'Chaul End', 'Chawston', 'Chellington', 'Chicksands', 'Chiltern Green', 'Church End Arlesey',
  'Church End Totternhoe', 'Clapham', 'Clifton', 'Clipstone', 'Clophill', 'Cockayne Hatley',
  'Colesden', 'Colmworth', 'Cople', 'Cotton End', 'Cranfield', 'De Parys',
  "Duck's Cross", 'Dunstable', 'Dunton', 'East Hyde', 'Eastcotts', 'Eaton Bray',
  'Edworth', 'Eggington', 'Elstow', 'Eversholt', 'Everton', 'Eyeworth',
  'Fancott', 'Farndish', 'Felmersham', 'Flitton', 'Flitwick', 'Goldington',
  'Gravenhurst', 'Great Barford', 'Great Billington', 'Great Denham', 'Greenfield', 'Hall End',
  'Harlington', 'Harpur', 'Harrold', 'Harrowden', 'Hatch', 'Haynes',
  'Haynes Church End', 'Heath and Reach', 'Henlow', 'Henlow Camp', 'Herrings Green', 'Higham Gobion',
  'Hinwick', 'Hockliffe', 'Hockwell Ring', 'Holme', 'Holywell', 'Honeydon',
  'Houghton Conquest', 'Houghton Regis', 'How End', 'Hulcote', 'Husbourne Crawley', 'Hyde',
  'Ickwell', 'Ion', 'Ireland', 'Keeley Green', 'Kempston', 'Kempston East',
  'Kempston Hardwick', 'Kempston North', 'Kempston Rural', 'Kempston South', 'Kensworth', 'Kensworth Lynch',
  'Keysoe', 'Keysoe Row', 'Kingsbrook', 'Knotting', 'Knotting Green', 'Langford',
  'Leagrave', 'Leedon', 'Leighton Buzzard', 'Lidlington', 'Limbury', 'Linslade',
  'Little Barford', 'Little Billington', 'Little Staughton', 'Lower Caldecote', 'Lower Dean', 'Lower Gravenhurst',
  'Lower Shelton', 'Lower Stondon', 'Lower Sundon', 'Lower Woodside', 'Luton', 'Marston Moretaine',
  'Maulden', 'Melchbourne', 'Meppershall', 'Millbrook', 'Milton Bryan', 'Milton Ernest',
  'Moggerhanger', 'New Mill End', 'Newnham', 'Northill', 'Oakley', 'Odell',
  'Old Warden', 'Pavenham', 'Pegsdon', 'Pepperstock', 'Pertenhall', 'Podington',
  'Potsgrove', 'Potton', 'Pulloxhill', 'Putnoe', 'Queens Park', 'Radwell',
  'Ravensden', 'Renhold', 'Ridgmont', 'Riseley', 'Roxton', 'Salford',
  'Salph End', 'Sandy', 'Seddington', 'Sewell', 'Sharnbrook', 'Sharpenhoe',
  'Sheep Lane', 'Shefford', 'Shelton', 'Shillington', 'Shortstown', 'Silsoe',
  'Skimpot', 'Slip End', 'Souldrop', 'Southcote', 'Southill', 'Stagsden',
  'Stanbridge', 'Stanford', 'Steppingley', 'Stevington', 'Stewartby', 'Stotfold',
  'Streatley', 'Studham', 'Sutton', 'Swineshead', 'Tebworth', 'Tempsford',
  'The Hyde', 'Thorn', 'Thorncote Green', 'Thurleigh', 'Tilsworth', 'Tingrith',
  'Toddington', 'Totternhoe', 'Turvey', 'Upper Caldecote', 'Upper Dean', 'Upper Gravenhurst',
  'Upper Shelton', 'Upper Staploe', 'Upper Stondon', 'Upper Sundon', 'West End', 'Westoning',
  'Wharley End', 'Whipsnade', 'Wilden', 'Willington', 'Wilshamstead', 'Wilstead',
  'Wingfield', 'Wixams', 'Woburn', 'Wood End', 'Woodside', 'Wootton',
  'Wootton Green', 'Wrestlingworth', 'Wyboston', 'Wymington', 'Yielden',
]

function groupByLetter(list) {
  return list.reduce((acc, area) => {
    const letter = area[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(area)
    return acc
  }, {})
}


export default function Coverage() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'Coverage Areas | B Joseph Decorators'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'B Joseph Decorators covers Bedfordshire, Hertfordshire, North & West London and Middlesex. Check if we serve your area.')
  }, [])

  const filtered = query.trim()
    ? areas.filter((area) => area.toLowerCase().includes(query.toLowerCase()))
    : areas

  const grouped = query.trim() ? null : groupByLetter(filtered)
  const letters = grouped ? Object.keys(grouped).sort() : null

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment-dark border-b border-parchment-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
          <p className="section-label mb-4 animate-fade-up">Where We Work</p>
          <h1
            className="font-heading font-semibold text-ink leading-[0.9] animate-fade-up anim-d1"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Coverage <span className="italic">Area</span>
          </h1>
          <div className="copper-rule mt-5 mb-4 animate-fade-up anim-d2" />
          <p className="text-ink-mid max-w-xl animate-fade-up anim-d3">
            We provide professional decorating services across Bedfordshire, Hertfordshire, North &amp; West London, and Middlesex. The list below covers our locations — don't see your area? Get in touch, we very likely cover it.
          </p>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24">

        {/* Header row */}
        <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12">
          <div>
            <p className="section-label mb-2">Areas We Cover</p>
            <p className="text-slate text-sm">{areas.length} locations listed</p>
          </div>
          <div className="sm:ml-auto relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search areas…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-parchment-border focus:border-copper focus:outline-none transition-colors duration-200 py-2.5 pr-8 text-ink placeholder-slate text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-slate hover:text-ink transition-colors"
                aria-label="Clear search"
                style={{ fontSize: '1.25rem', lineHeight: 1 }}
              >
                ×
              </button>
            )}
          </div>
        </div>
        </Reveal>

        {filtered.length === 0 && (
          <p className="text-slate text-sm mb-8">No areas found for "{query}".</p>
        )}

        {/* Search results: flat grid */}
        {query.trim() && filtered.length > 0 && (
          <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
            {filtered.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 px-3 py-2.5 border border-parchment-border hover:border-copper/40 hover:bg-copper-pale/20 transition-all duration-200"
              >
                <span className="w-1 h-1 rounded-full bg-copper shrink-0" />
                <span className="text-ink-mid text-sm truncate">{area}</span>
              </div>
            ))}
          </div>
          </Reveal>
        )}

        {/* Grouped A–Z */}
        {!query.trim() && (
          <div className="space-y-10">
            {letters.map((letter) => (
              <Reveal key={letter}>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="font-heading font-semibold leading-none"
                    style={{ fontSize: '1.5rem', color: '#C4622D' }}
                  >
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-parchment-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
                  {grouped[letter].map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 px-3 py-2.5 border border-parchment-border hover:border-copper/40 hover:bg-copper-pale/20 transition-all duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-copper shrink-0" />
                      <span className="text-ink-mid text-sm truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <Reveal delay={0.1}>
        <div className="mt-16 border border-parchment-border p-10 max-w-md mx-auto text-center">
          <p className="section-label mb-3">Not on the list?</p>
          <p className="text-ink-mid text-sm mb-7 leading-relaxed">
            Our coverage is always expanding. Reach out and we'll let you know if we can come to you.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
        </Reveal>
      </section>
    </>
  )
}
