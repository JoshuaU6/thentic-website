import { useState, useEffect } from 'react';
import { products } from '../../data/products';

export default function HeroCan() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % products.length);
        setTransitioning(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const product = products[current];

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: 300, minHeight: 420 }}>

      {/* Glow */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          background: product.color,
          width: 280,
          height: 280,
          opacity: 0.25,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Product image or CSS can */}
      <div
        className="relative z-10 transition-all duration-500"
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? 'scale(0.92) translateY(8px)' : 'scale(1) translateY(0)',
        }}
      >
        {product.image ? (
          <div
            className="animate-float rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: 260,
              height: 320,
              border: `1px solid ${product.color}55`,
              boxShadow: `0 20px 60px ${product.color}44`,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          <CSSCan product={product} />
        )}
      </div>

      {/* Product name */}
      <div
        className="relative z-10 text-center mt-5 transition-all duration-500"
        style={{ opacity: transitioning ? 0 : 1 }}
      >
        <div className="font-cinzel font-bold text-sm tracking-[0.12em] text-cream">{product.name}</div>
        <div className="font-script italic text-xs text-gold/70 mt-1">{product.tagline}</div>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex justify-center gap-2 mt-5">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setTransitioning(true);
              setTimeout(() => { setCurrent(i); setTransitioning(false); }, 400);
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? '#C9A84C' : 'rgba(201,168,76,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CSSCan({ product }) {
  const lighten = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.min(255,r+60)},${Math.min(255,g+50)},${Math.min(255,b+40)})`;
  };
  const darken = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.max(0,r-40)},${Math.max(0,g-35)},${Math.max(0,b-30)})`;
  };

  return (
    <div
      className="animate-float can-tilt"
      style={{
        width: 160, height: 280,
        borderRadius: '18px 18px 14px 14px',
        background: `linear-gradient(160deg, ${lighten(product.color)} 0%, ${product.color} 40%, ${darken(product.color)} 100%)`,
        position: 'relative', overflow: 'hidden',
        boxShadow: `0 0 60px ${product.color}55, inset -20px 0 40px rgba(0,0,0,0.4), inset 10px 0 20px rgba(255,255,255,0.08)`,
      }}
    >
      <div style={{ position:'absolute', top:0, left:'18%', width:'12%', height:'100%', background:'linear-gradient(180deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.04) 100%)', borderRadius:4 }} />
      <div style={{ position:'absolute', top:'18%', left:'8%', right:'8%', bottom:'18%', background:'rgba(0,0,0,0.35)', borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'12px 8px', border:'0.5px solid rgba(201,168,76,0.4)' }}>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:9, color:'#C9A84C', letterSpacing:'0.2em', marginBottom:4, textAlign:'center' }}>THENTIC MIX</div>
        <div style={{ fontFamily:'Cinzel,serif', fontSize:11, fontWeight:700, color:'#FAF5E9', textAlign:'center', lineHeight:1.3, letterSpacing:'0.06em' }}>{product.name.toUpperCase()}</div>
        <div style={{ width:40, height:0.5, background:'#C9A84C', margin:'6px auto' }} />
        <div style={{ fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', fontSize:9, color:'rgba(245,230,184,0.8)', textAlign:'center', lineHeight:1.4 }}>
          {product.type === 'cocktail' ? 'Premium Ready-To-Drink Cocktail' : 'Premium Ready-To-Drink Mocktail'}
        </div>
      </div>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:24, background:'linear-gradient(180deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0.05) 100%)', borderRadius:'18px 18px 0 0' }} />
      <div style={{ position:'absolute', top:8, left:'50%', transform:'translateX(-50%)', width:28, height:8, borderRadius:4, background:'linear-gradient(135deg,#e0e0e0,#a0a0a0)', boxShadow:'0 1px 3px rgba(0,0,0,0.5)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:20, background:'rgba(0,0,0,0.4)', borderRadius:'0 0 14px 14px' }} />
    </div>
  );
}