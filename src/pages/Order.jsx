import { useEffect } from 'react';
import { MessageCircle, Package, Truck, CreditCard, CheckCircle } from "lucide-react";

function IgIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
import { products, getWhatsAppLink } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const steps = [
  { icon: Package, title: 'Browse the menu', desc: 'Explore the full Thentic Mix collection — 5 cocktails and 2 mocktails, all ready to drink.' },
  { icon: MessageCircle, title: 'Message us', desc: 'Click "Order via WhatsApp" or DM us on Instagram with your chosen products and quantity.' },
  { icon: CheckCircle, title: 'Confirm your order', desc: 'We\'ll confirm availability, share delivery details, and agree on your delivery slot.' },
  { icon: CreditCard, title: 'Pay & receive', desc: 'Make payment via transfer. Your Thentic Mix gets delivered to you across Lagos.' },
];

export default function Order() {
  const r1 = useScrollReveal(), r2 = useScrollReveal(), r3 = useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={r1} className="section-reveal text-center mb-16">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-4">Get Your Mix</div>
          <h1 className="font-cinzel font-bold text-5xl tracking-widest text-cream mb-4">HOW TO ORDER</h1>
          <div className="divider max-w-xs mx-auto my-6"><span className="text-gold/30 text-xs px-4">✦</span></div>
          <p className="font-script italic text-xl text-gold/70">Simple, fast, delivered to your door.</p>
        </div>

        {/* Steps */}
        <div ref={r2} className="section-reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.08)' }}>
                  <Icon size={16} color="#C9A84C" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-cinzel text-[10px] text-gold/40 tracking-wider">0{i + 1}</span>
                  <h3 className="font-cinzel font-bold text-sm tracking-wider text-cream">{title}</h3>
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTAs */}
        <div ref={r3} className="section-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-5 p-7 rounded-xl transition-all duration-300"
              style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#25D366' }}>
                <MessageCircle size={22} color="white" />
              </div>
              <div>
                <div className="font-cinzel font-bold text-sm tracking-wider text-cream mb-1">Order via WhatsApp</div>
                <div className="font-body text-xs text-muted">Fastest way to order. We respond quickly.</div>
                <div className="font-cinzel text-[10px] tracking-wider uppercase text-gold mt-2 group-hover:translate-x-1 transition-transform inline-block">
                  Message us →
                </div>
              </div>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-5 p-7 rounded-xl transition-all duration-300"
              style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <IgIcon size={22} color="white" />
              </div>
              <div>
                <div className="font-cinzel font-bold text-sm tracking-wider text-cream mb-1">Order via Instagram</div>
                <div className="font-body text-xs text-muted">DM us on Instagram @thenticliquor</div>
                <div className="font-cinzel text-[10px] tracking-wider uppercase text-gold mt-2 group-hover:translate-x-1 transition-transform inline-block">
                  Find us →
                </div>
              </div>
            </a>
          </div>

          {/* Pricing table */}
          <div className="rounded-xl overflow-hidden" style={{ border: '0.5px solid rgba(201,168,76,0.2)' }}>
            <div className="px-6 py-4" style={{ background: '#1E1208', borderBottom: '0.5px solid rgba(201,168,76,0.15)' }}>
              <h3 className="font-cinzel font-bold text-sm tracking-wider text-cream">Pricing</h3>
            </div>
            <div style={{ background: '#16100A' }}>
              {products.map((p, i) => (
                <div key={p.id} className="flex items-center justify-between px-6 py-4"
                  style={{ borderBottom: i < products.length - 1 ? '0.5px solid rgba(201,168,76,0.07)' : 'none' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                    <span className="font-cinzel text-sm text-cream">{p.name}</span>
                    <span className="font-cinzel text-[9px] tracking-wider uppercase text-gold/40">{p.type}</span>
                  </div>
                  <span className="font-cinzel font-bold text-sm gold-text">₦{p.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: '0.5px solid rgba(201,168,76,0.15)', background: '#1E1208' }}>
                <div className="flex items-center gap-3">
                  <Truck size={14} color="#C9A84C" />
                  <span className="font-cinzel text-sm text-cream">Carton / Bulk Orders</span>
                </div>
                <span className="font-cinzel text-sm text-gold/60">Ask for pricing</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-body text-xs text-muted mb-4">
              Delivery available across Lagos. Ask about your area when ordering.
            </p>
            <Link to="/products" className="font-cinzel text-xs tracking-wider uppercase text-gold hover:text-gold/70 transition-colors">
              View full product details →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
