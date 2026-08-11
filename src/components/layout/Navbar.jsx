import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../../data/products';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'The Mix' },
  { to: '/about', label: 'Our Story' },
  { to: '/order', label: 'Order' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '0.5px solid rgba(201,168,76,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start leading-none group">
            <span className="font-cinzel font-bold text-xl tracking-[0.2em] gold-text">THENTIC</span>
            <span className="font-script italic text-xs text-gold/70 tracking-widest">Liquor</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="font-cinzel text-[11px] tracking-[0.14em] uppercase transition-all duration-300 relative group"
                style={{ color: pathname === l.to ? '#C9A84C' : '#FAF5E9' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300"
                  style={{ width: pathname === l.to ? '100%' : '0' }}
                />
                <span className="absolute -bottom-0.5 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] px-5 py-3"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-cream p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 transition-all duration-500 md:hidden"
        style={{
          background: 'rgba(13,13,13,0.97)',
          backdropFilter: 'blur(16px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <div className="flex flex-col gap-6 mt-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="font-cinzel text-lg tracking-[0.16em] uppercase border-b border-gold/10 pb-4"
              style={{ color: pathname === l.to ? '#C9A84C' : '#FAF5E9' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
