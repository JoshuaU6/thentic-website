import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppLink } from '../data/products';
import { Link } from 'react-router-dom';

export default function About() {
  const r1 = useScrollReveal(), r2 = useScrollReveal(), r3 = useScrollReveal(), r4 = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen pt-28 pb-24">
      {/* Hero */}
      <section className="relative py-20 max-w-5xl mx-auto px-6 text-center">
        <div ref={r1} className="section-reveal">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-4">Our Story</div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-cream mb-4 leading-tight">
            Born in <span className="gold-text">Lagos.</span>
          </h1>
          <h1 className="font-display font-black text-5xl md:text-7xl text-cream leading-tight mb-8">
            Built for the world.
          </h1>
          <div className="divider max-w-xs mx-auto my-8"><span className="text-gold/30 text-xs px-4">✦</span></div>
          <p className="font-script italic text-xl text-cream/70 leading-relaxed max-w-2xl mx-auto">
            Thentic Mix was born from a simple question: why should premium cocktail experiences be limited to bars and restaurants?
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div ref={r2} className="section-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #5C0E0E 100%)' }}>
              <div className="text-center p-10">
                <div className="w-32 h-32 rounded-full border-2 border-gold/50 flex flex-col items-center justify-center mx-auto mb-6">
                  <div className="font-cinzel font-bold text-lg tracking-[0.2em] gold-text">THENTIC</div>
                  <div className="w-14 h-px bg-gold/50 my-2" />
                  <div className="font-script italic text-sm text-gold/70">Liquor</div>
                </div>
                <p className="font-script italic text-xl text-cream/80 leading-relaxed">
                  "We care about your liver."
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[['2024', 'Founded'], ['Lagos', 'Home'], ['7', 'Flavours'], ['₦6K+', 'From']].map(([v, l]) => (
                    <div key={l} className="text-center p-3 rounded-lg" style={{ background: 'rgba(0,0,0,0.3)', border: '0.5px solid rgba(201,168,76,0.2)' }}>
                      <div className="font-cinzel font-bold text-lg gold-text">{v}</div>
                      <div className="font-body text-[10px] text-muted uppercase tracking-widest mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-5">The Beginning</div>
            <h2 className="font-display font-bold text-3xl text-cream mb-6 leading-tight">
              Crafted for Lagos. <br /><span className="gold-text">Loved everywhere.</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Thentic Liquor was created to bring the premium cocktail experience directly to you — no bartender required, no bar tab. Just crack open a can and enjoy.
              </p>
              <p>
                Every flavour in the Thentic Mix collection is a love letter to Lagos. From the bold, spirit-forward <strong className="text-cream">Lagos Long Island</strong>, to the citrusy, nighttime energy of <strong className="text-cream">Ikoyi Nights</strong> — our cocktails carry the soul of the city.
              </p>
              <p>
                We believe premium shouldn't be a privilege. Whether you're hosting a gathering, enjoying a quiet evening, or celebrating with friends, Thentic Mix delivers quality you can feel in every sip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product names explained */}
      <section className="py-20" style={{ background: '#1A1008' }}>
        <div ref={r3} className="section-reveal max-w-5xl mx-auto px-6 text-center">
          <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-4">The Lagos Collection</div>
          <h2 className="font-display font-bold text-4xl text-cream mb-3">Names that mean something.</h2>
          <p className="font-script italic text-lg text-gold/60 mb-14">Each cocktail is a tribute to the city we call home.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { name: 'Lagos Long Island', color: '#8B6914', story: "Named after the commercial heart of our city. Bold, complex, and impossible to ignore — just like Lagos itself." },
              { name: 'Ikoyi Nights', color: '#1A2E5C', story: "Ikoyi — Lagos's most refined neighbourhood. This cocktail captures those warm, electric nights by the lagoon." },
              { name: 'Elderflower Gin & Tonic', color: '#2D5A27', story: "Light and sophisticated, for the Lagos professional who knows exactly what they want." },
              { name: 'Whiskey Sour', color: '#A0501A', story: "A global classic, elevated with Thentic quality. Bold meets balanced — unforgettable every time." },
            ].map(({ name, color, story }) => (
              <div key={name} className="p-6 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                  <span className="font-cinzel font-bold text-sm tracking-wider text-cream">{name}</span>
                </div>
                <p className="font-script italic text-sm text-muted leading-relaxed">{story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={r4} className="section-reveal py-20 text-center max-w-3xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-cream mb-4">
          Taste the <span className="gold-text">difference.</span>
        </h2>
        <p className="font-script italic text-lg text-gold/60 mb-8">Order your first Thentic Mix today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/products" className="btn-primary">Shop The Mix</Link>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary">Order via WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
