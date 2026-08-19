import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

const filters = ['all', 'cocktail', 'mocktail'];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(searchParams.get('filter') || 'all');
  const headRef = useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = active === 'all' ? products : products.filter(p => p.type === active);

  function handleFilter(f) {
    setActive(f);
    if (f === 'all') setSearchParams({});
    else setSearchParams({ filter: f });
  }

  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div ref={headRef} className="section-reveal text-center mb-12">
        <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-3">Premium Ready-To-Drink</div>
        <h1 className="font-cinzel font-bold text-5xl md:text-6xl tracking-widest text-cream mb-3">THE MIX</h1>
        <div className="divider max-w-xs mx-auto my-4"><span className="text-gold/30 text-xs px-4">✦</span></div>
        <p className="font-script italic text-xl text-gold/70">The full Thentic collection</p>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className="font-cinzel text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm transition-all duration-300"
            style={{
              background: active === f ? 'linear-gradient(135deg, #C9A84C, #F0C35A)' : 'transparent',
              color: active === f ? '#0D0D0D' : '#C9A84C',
              border: active === f ? 'none' : '1px solid rgba(201,168,76,0.3)',
            }}
          >
            {f === 'all' ? 'All Products' : f === 'cocktail' ? 'Cocktails' : 'Mocktails'}
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="text-center mb-8">
        <span className="font-cinzel text-xs tracking-wider text-muted uppercase">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} staggerIndex={i} />
        ))}
      </div>

      {/* Pricing note */}
      <div className="mt-16 text-center p-8 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
        <div className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-3">Pricing</div>
        <div className="flex flex-wrap justify-center gap-8">
          <div>
            <div className="font-cinzel font-bold text-2xl gold-text">₦8,000</div>
            <div className="font-body text-xs text-muted mt-1">Per cocktail can</div>
          </div>
          <div className="w-px bg-gold/15 self-stretch" />
          <div>
            <div className="font-cinzel font-bold text-2xl gold-text">₦6,000</div>
            <div className="font-body text-xs text-muted mt-1">Per mocktail can</div>
          </div>
          <div className="w-px bg-gold/15 self-stretch" />
          <div>
            <div className="font-cinzel font-bold text-sm gold-text">Carton orders</div>
            <div className="font-body text-xs text-muted mt-1">Ask for bulk pricing</div>
          </div>
        </div>
      </div>
    </main>
  );
}