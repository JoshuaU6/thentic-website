import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../data/products';

function MiniCan({ product, size = 100 }) {
  const h = size * 1.75;
  const lighten = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.min(255,r+60)},${Math.min(255,g+50)},${Math.min(255,b+40)})`;
  };
  const darken = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.max(0,r-40)},${Math.max(0,g-35)},${Math.max(0,b-30)})`;
  };

  return (
    <div style={{
      width: size, height: h, borderRadius: '12px 12px 8px 8px',
      background: `linear-gradient(160deg, ${lighten(product.color)} 0%, ${product.color} 45%, ${darken(product.color)} 100%)`,
      position: 'relative', overflow: 'hidden',
      boxShadow: `0 8px 32px ${product.color}44, inset -8px 0 16px rgba(0,0,0,0.4), inset 4px 0 8px rgba(255,255,255,0.08)`,
      flexShrink: 0,
    }}>
      <div style={{
        position:'absolute', top:'8%', left:'6%', right:'6%', bottom:'8%',
        background:'rgba(0,0,0,0.3)', borderRadius:3,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        padding:'6px 4px', border:'0.5px solid rgba(201,168,76,0.35)',
      }}>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:6, color:'#C9A84C', letterSpacing:'0.15em', marginBottom:3, textAlign:'center' }}>THENTIC MIX</div>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:7, fontWeight:700, color:'#FAF5E9', textAlign:'center', lineHeight:1.3 }}>
          {product.name.toUpperCase()}
        </div>
      </div>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:14, background:'linear-gradient(180deg,rgba(255,255,255,0.2) 0%,transparent 100%)', borderRadius:'12px 12px 0 0' }} />
      <div style={{ position:'absolute', top:5, left:'50%', transform:'translateX(-50%)', width:18, height:5, borderRadius:3, background:'linear-gradient(135deg,#e0e0e0,#a0a0a0)' }} />
      <div style={{ position:'absolute', left:'18%', top:0, width:'10%', height:'100%', background:'linear-gradient(180deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.03) 100%)', borderRadius:2 }} />
    </div>
  );
}

export default function ProductCard({ product, staggerIndex = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const delay = staggerIndex * 80;

    // Already visible — show with just a delay
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
  }, [staggerIndex]);

  return (
    <div ref={ref} className="section-reveal group relative">
      <div
        className="h-full flex flex-col rounded-xl overflow-hidden"
        style={{
          background: '#1E1208',
          border: '0.5px solid rgba(201,168,76,0.2)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = `0 20px 60px ${product.color}33, 0 0 0 0.5px rgba(201,168,76,0.5)`;
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
        }}
      >
        {/* Can image area */}
        <div
          className="flex items-end justify-center pt-8 pb-4 relative overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${product.color}22, transparent 60%)`, minHeight: 200 }}
        >
          <div className="relative can-tilt">
            <MiniCan product={product} size={90} />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-5">
          <span className="font-cinzel text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm self-start mb-3"
            style={{
              background: product.type === 'cocktail' ? 'rgba(139,26,26,0.3)' : 'rgba(45,90,39,0.3)',
              color: product.type === 'cocktail' ? '#E84040' : '#5A9E52',
              border: `0.5px solid ${product.type === 'cocktail' ? 'rgba(232,64,64,0.3)' : 'rgba(90,158,82,0.3)'}`,
            }}>
            {product.type}
          </span>

          <h3 className="font-cinzel font-bold text-sm tracking-wider text-cream mb-1 leading-tight">{product.name}</h3>
          <p className="font-script italic text-xs text-gold/70 mb-3">{product.tagline}</p>
          <p className="text-xs text-muted leading-relaxed mb-4 flex-1">{product.description}</p>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gold/10">
            <span className="font-cinzel font-bold text-sm" style={{ color: '#C9A84C' }}>
              ₦{product.price.toLocaleString()}
            </span>
            <div className="flex gap-2">
              <Link
                to={`/products/${product.slug}`}
                className="font-cinzel text-[10px] tracking-wider uppercase text-gold/60 hover:text-gold transition-colors px-3 py-1.5 border border-gold/20 hover:border-gold/50 rounded-sm"
              >
                Details
              </Link>
              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-[10px] tracking-wider uppercase text-[#0D0D0D] px-3 py-1.5 rounded-sm"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #F0C35A)' }}
              >
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
