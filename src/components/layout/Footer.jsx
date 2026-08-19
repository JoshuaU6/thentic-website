import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/products';

function IgIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand with transparent PNG logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 w-fit group">
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: '#ffffff',
                padding: 4,
                flexShrink: 0,
                boxShadow: '0 0 0 1.5px rgba(201,168,76,0.4), 0 2px 16px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src="/logo.png"
                  alt="Thentic Liquor"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-cinzel font-bold text-lg tracking-[0.2em] gold-text">THENTIC</span>
                <span className="font-script italic text-xs text-gold/60 tracking-widest mt-0.5">Liquor</span>
              </div>
            </Link>

            <p className="font-script italic text-gold/60 text-sm leading-relaxed mb-6">
              "We care about your liver."
            </p>

            <div className="flex gap-4">
              <a href="https://instagram.com/thenticmix" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300">
                <IgIcon size={16} />
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-5">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                ['/', 'Home'],
                ['/products', 'The Mix'],
                ['/about', 'Our Story'],
                ['/order', 'Order'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="font-body text-sm text-muted hover:text-cream transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-5">Order</h4>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Ready to experience Thentic Mix? Order now via WhatsApp for fast Lagos delivery.
            </p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm inline-block">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="divider mt-12 mb-6">
          <span className="text-gold/30 text-xs">✦</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© 2026 Thentic Liquor. All rights reserved.</p>
          <p className="font-script italic text-gold/40">Premium. Timeless. Unforgettable.</p>
        </div>
      </div>
    </footer>
  );
}