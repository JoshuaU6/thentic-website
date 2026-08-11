import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, getWhatsAppLink } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

function BigCan({ product }) {
  const lighten = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.min(255,r+70)},${Math.min(255,g+60)},${Math.min(255,b+50)})`;
  };
  const darken = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.max(0,r-50)},${Math.max(0,g-45)},${Math.max(0,b-40)})`;
  };

  return (
    <div className="can-tilt animate-float" style={{
      width: 200, height: 350, borderRadius: '22px 22px 18px 18px',
      background: `linear-gradient(160deg, ${lighten(product.color)} 0%, ${product.color} 45%, ${darken(product.color)} 100%)`,
      position: 'relative', overflow: 'hidden',
      boxShadow: `0 20px 80px ${product.color}66, inset -25px 0 50px rgba(0,0,0,0.4), inset 12px 0 24px rgba(255,255,255,0.08)`,
    }}>
      <div style={{ position:'absolute', top:'8%', left:'7%', right:'7%', bottom:'8%', background:'rgba(0,0,0,0.32)', borderRadius:6,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'16px 12px',
        border:'0.5px solid rgba(201,168,76,0.45)' }}>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:10, color:'#C9A84C', letterSpacing:'0.2em', marginBottom:6, textAlign:'center' }}>THENTIC MIX</div>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:15, fontWeight:700, color:'#FAF5E9', textAlign:'center', lineHeight:1.3, letterSpacing:'0.06em' }}>
          {product.name.toUpperCase()}
        </div>
        <div style={{ width:50, height:0.5, background:'#C9A84C', margin:'10px auto' }} />
        <div style={{ fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', fontSize:10, color:'rgba(245,230,184,0.85)', textAlign:'center', lineHeight:1.5 }}>
          {product.type === 'cocktail' ? 'Premium Ready-To-Drink Cocktail' : 'Premium Ready-To-Drink Mocktail'}
        </div>
        <div style={{ marginTop:10, fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', fontSize:10, color:'rgba(201,168,76,0.7)', textAlign:'center' }}>
          {product.tagline}
        </div>
      </div>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:30, background:'linear-gradient(180deg,rgba(255,255,255,0.22) 0%,transparent 100%)', borderRadius:'22px 22px 0 0' }} />
      <div style={{ position:'absolute', top:10, left:'50%', transform:'translateX(-50%)', width:36, height:10, borderRadius:5, background:'linear-gradient(135deg,#e0e0e0,#a0a0a0)', boxShadow:'0 2px 4px rgba(0,0,0,0.5)' }} />
      <div style={{ position:'absolute', left:'18%', top:0, width:'10%', height:'100%', background:'linear-gradient(180deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.03) 100%)', borderRadius:3 }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:25, background:'rgba(0,0,0,0.45)', borderRadius:'0 0 18px 18px' }} />
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const infoRef = useScrollReveal();
  const relatedRef = useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!product) return <Navigate to="/products" />;

  const related = products.filter(p => p.id !== product.id && p.type === product.type).slice(0, 3);
  const otherType = products.filter(p => p.type !== product.type).slice(0, 3);
  const suggestions = related.length >= 2 ? related : [...related, ...otherType].slice(0, 3);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${product.color}33 0%, #0D0D0D 60%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(circle at 30% 50%, ${product.color}, transparent 60%)` }} />

        <div className="max-w-7xl mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors font-cinzel text-xs tracking-wider uppercase mb-12">
            <ArrowLeft size={14} /> Back to collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Can */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full blur-3xl opacity-25"
                  style={{ background: product.color }} />
              </div>
              <BigCan product={product} />
            </div>

            {/* Info */}
            <div ref={infoRef} className="section-reveal">
              <span className="font-cinzel text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm inline-block mb-5"
                style={{
                  background: product.type === 'cocktail' ? 'rgba(139,26,26,0.3)' : 'rgba(45,90,39,0.3)',
                  color: product.type === 'cocktail' ? '#E84040' : '#5A9E52',
                  border: `0.5px solid ${product.type === 'cocktail' ? 'rgba(232,64,64,0.3)' : 'rgba(90,158,82,0.3)'}`,
                }}>
                {product.type === 'cocktail' ? '🍸 Cocktail' : '🥤 Mocktail'}
              </span>

              <h1 className="font-cinzel font-bold text-4xl md:text-5xl tracking-wider text-cream mb-2 leading-tight">
                {product.name}
              </h1>
              <p className="font-script italic text-2xl mb-6" style={{ color: product.accentLight }}>
                {product.tagline}
              </p>

              <div className="divider max-w-sm mb-6"><span className="text-gold/30 text-xs px-4">✦</span></div>

              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Flavour notes */}
              <div className="mb-8">
                <div className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">Flavour notes</div>
                <div className="flex flex-wrap gap-2">
                  {product.flavourNotes.map(note => (
                    <span key={note} className="flex items-center gap-1.5 font-body text-xs px-3 py-1.5 rounded-sm"
                      style={{ background: 'rgba(201,168,76,0.08)', border: '0.5px solid rgba(201,168,76,0.25)', color: '#F5E6B8' }}>
                      <Star size={8} fill="#C9A84C" color="#C9A84C" /> {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 p-5 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
                <div className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-1">Price per can</div>
                <div className="font-cinzel font-bold text-4xl gold-text">₦{product.price.toLocaleString()}</div>
                <div className="font-body text-xs text-muted mt-1">Carton orders available — ask for bulk pricing</div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageCircle size={14} />
                  Order via WhatsApp
                </a>
                <a
                  href={getWhatsAppLink(`a carton of ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Carton Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div ref={relatedRef} className="section-reveal mb-10 text-center">
          <div className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">You might also like</div>
          <h3 className="font-cinzel font-bold text-2xl tracking-wider text-cream">More from The Mix</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {suggestions.map((p, i) => <ProductCard key={p.id} product={p} staggerIndex={i} />)}
        </div>
      </section>
    </main>
  );
}
