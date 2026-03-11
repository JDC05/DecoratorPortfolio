import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  'Duck\'s Cross', 'Dunstable', 'Dunton', 'East Hyde', 'Eastcotts', 'Eaton Bray',
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

export default function Coverage() {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? areas.filter((area) => area.toLowerCase().includes(query.toLowerCase()))
    : areas

  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-mid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Where We Work</p>
          <h1 className="section-title">Coverage Area</h1>
          <div className="section-divider" />
          <p className="text-white/60 max-w-xl">
            We provide professional decorating services across Bedfordshire and the surrounding areas. Don't see your town listed? Get in touch — we may still be able to help.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-heading text-2xl font-bold text-white mb-2">Areas We Cover</h2>
        <div className="section-divider mb-8" />

        <div className="relative max-w-sm mb-6">
          <input
            type="text"
            placeholder="Search areas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-navy-mid border border-white/10 rounded-lg px-4 py-2.5 pr-10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/50"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-sm mb-6">No areas found for "{query}".</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {filtered.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-navy-mid rounded-lg px-3 py-2.5 border border-white/5 hover:border-accent/30 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-white/80 text-sm truncate">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-navy-light rounded-xl p-5 border border-white/10 max-w-md mx-auto text-center">
          <p className="text-accent font-semibold mb-1">Not on the list?</p>
          <p className="text-white/60 text-sm mb-4">
            Our coverage is always expanding. Reach out and we'll let you know if we can come to you.
          </p>
          <Link to="/contact" className="btn-accent text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
