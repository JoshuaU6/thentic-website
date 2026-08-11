import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Leaf, Beaker, Package, MapPin } from 'lucide-react';
import HeroCan from '../components/3d/CanDisplay';
import Particles from '../components/ui/Particles';
import ProductCard from '../components/ui/ProductCard';
import { products, cocktails, mocktails, getWhatsAppLink } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

function PromiseCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const delay = index * 120;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => el.classList.add('visible'), delay);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="section-reveal text-center p-8 rounded-xl"
      style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5"
        style={{ background: 'rgba(201,168,76,0.08)' }}>
        <Icon size={20} color="#C9A84C" />
      </div>
      <h4 className="font-cinzel font-bold text-sm tracking-wider text-cream mb-3">{title}</h4>
      <p className="font-body text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function Divider({ children }) {
  return (
    <div className="divider my-3">
      <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/60 px-4">
        {children || '✦'}
      </span>
    </div>
  );
}

export default function Home() {
  const statementRef = useScrollReveal();
  const productsHeadRef = useScrollReveal();
  const splitRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-rich-black">
        <Particles count={50} />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8B1A1A 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/70 border border-gold/20 px-3 py-1.5 rounded-sm">
                Premium Ready-To-Drink
              </span>
            </div>

            <h1 className="font-display font-black leading-tight mb-2" style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}>
              <span className="gold-shimmer">Premium.</span>
            </h1>
            <h1 className="font-display font-black leading-tight mb-2 text-cream" style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}>
              Timeless.
            </h1>
            <h1 className="font-display font-black leading-tight mb-6" style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}>
              <span className="gold-text">Unforgettable.</span>
            </h1>

            <p className="font-script italic text-gold/70 text-xl mb-8 leading-relaxed">
              Ready-to-drink cocktails & mocktails, crafted in Lagos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Explore The Mix
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <MessageCircle size={14} />
                Order via WhatsApp
              </a>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-gold/10">
              {[['7', 'Flavours'], ['₦6K', 'From'], ['Lagos', 'Delivered']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-cinzel font-bold text-xl gold-text">{val}</div>
                  <div className="font-body text-xs text-muted tracking-widest uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroCan />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/40">
          <div className="font-cinzel text-[10px] tracking-[0.2em] uppercase">Scroll</div>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #5C0E0E 0%, #8B1A1A 50%, #5C0E0E 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.1) 40px, rgba(201,168,76,0.1) 41px)' }} />

        <div ref={statementRef} className="section-reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-8">The Thentic Difference</div>
          <Divider />
          <blockquote className="font-display font-bold italic text-cream leading-tight my-8"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            "Not just a drink.<br />
            <span className="gold-text">A statement."</span>
          </blockquote>
          <Divider />
          <p className="font-script italic text-xl text-cream/70 leading-relaxed mt-8">
            Every can in the Thentic Mix range is crafted with premium ingredients,<br />
            perfectly balanced by hand, and ready to elevate any moment — anytime, anywhere in Lagos.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-gold/40 flex flex-col items-center justify-center">
              <div className="font-cinzel font-bold text-xs tracking-[0.15em] text-gold">THENTIC</div>
              <div className="w-10 h-px bg-gold/50 my-1" />
              <div className="font-script italic text-[10px] text-gold/70">Liquor</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="products">
        <div ref={productsHeadRef} className="section-reveal text-center mb-14">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-3">The Collection</div>
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl tracking-widest text-cream mb-3">THE MIX</h2>
          <p className="font-script italic text-xl text-gold/70">Choose your flavour</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} staggerIndex={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">View Full Menu</Link>
        </div>
      </section>

      {/* ── COCKTAILS vs MOCKTAILS SPLIT ── */}
      <section className="py-8 max-w-7xl mx-auto px-6 mb-8">
        <div ref={splitRef} className="section-reveal grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden">
          <Link to="/products?filter=cocktail" className="group relative overflow-hidden rounded-xl" style={{ minHeight: 320 }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #5C0E0E 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at center, #C9A84C, transparent)' }} />
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-3">Premium</div>
                <h3 className="font-display font-bold text-4xl text-cream mb-3">Cocktails</h3>
                <div className="w-12 h-px bg-gold/40 mb-4" />
                <p className="font-script italic text-lg text-cream/70 leading-relaxed">
                  Five premium spirits-based cocktails, ready to drink straight from the can.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cocktails.map(c => (
                    <span key={c.id} className="font-cinzel text-[9px] tracking-wider uppercase text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">{c.name}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <span className="font-cinzel text-xs tracking-[0.15em] uppercase text-gold group-hover:text-gold/80 transition-colors">Explore Cocktails</span>
                <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>

          <Link to="/products?filter=mocktail" className="group relative overflow-hidden rounded-xl" style={{ minHeight: 320 }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1A2E5C 0%, #060D1E 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at center, #C9A84C, transparent)' }} />
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-3">Alcohol-Free</div>
                <h3 className="font-display font-bold text-4xl text-cream mb-3">Mocktails</h3>
                <div className="w-12 h-px bg-gold/40 mb-4" />
                <p className="font-script italic text-lg text-cream/70 leading-relaxed">
                  Two vibrant, alcohol-free options — full flavour, zero compromise.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mocktails.map(c => (
                    <span key={c.id} className="font-cinzel text-[9px] tracking-wider uppercase text-gold/50 border border-gold/20 px-2 py-1 rounded-sm">{c.name}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <span className="font-cinzel text-xs tracking-[0.15em] uppercase text-gold group-hover:text-gold/80 transition-colors">Explore Mocktails</span>
                <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── WHY THENTIC ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div ref={whyRef} className="section-reveal text-center mb-14">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-3">Why choose us</div>
          <h2 className="font-display font-bold text-4xl text-cream">The Thentic Promise</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Leaf, title: 'Premium Ingredients', desc: 'Every can crafted with carefully sourced, high-quality ingredients for a superior taste.' },
            { icon: Beaker, title: 'Perfectly Balanced', desc: 'Professionally crafted recipes ensuring every sip is perfectly balanced and consistent.' },
            { icon: Package, title: 'Ready to Enjoy', desc: 'No mixing, no fuss. Pop the can and enjoy a premium cocktail or mocktail instantly.' },
            { icon: MapPin, title: 'Lagos Delivered', desc: 'Fast delivery across Lagos. Order via WhatsApp and receive your mix wherever you are.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <PromiseCard key={title} icon={Icon} title={title} desc={desc} index={i} />
          ))}
        </div>
      </section>

      {/* ── ORDER CTA BANNER ── */}
      <section
        ref={ctaRef}
        className="section-reveal relative py-24 overflow-hidden mx-6 mb-16 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #5C0E0E 60%, #8B1A1A 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,168,76,0.15) 40px, rgba(201,168,76,0.15) 41px)' }} />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/70 mb-4">Premium Cocktails. Anytime. Anywhere.</div>
          <h2 className="font-display font-black text-5xl md:text-6xl text-cream mb-4">
            Ready to <span className="gold-text">Order?</span>
          </h2>
          <p className="font-script italic text-xl text-cream/70 mb-3">
            Cocktails from ₦8,000 · Mocktails from ₦6,000
          </p>
          <p className="font-body text-sm text-cream/50 mb-10">
            Available for delivery across Lagos. Carton orders welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
              <MessageCircle size={14} />
              Order via WhatsApp
            </a>
            <Link to="/products" className="btn-secondary" style={{ borderColor: 'rgba(250,245,233,0.4)', color: '#FAF5E9' }}>
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}