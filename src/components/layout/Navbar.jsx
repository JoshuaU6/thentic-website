import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../../data/products';
import logo from '../../assets/logo.jpg';

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
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '0.5px solid rgba(201,168,76,0.15)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:ring-2 group-hover:ring-gold/40"
              style={{
                width: 48,
                height: 48,
                background: '#fff',
                padding: 2,
              }}
            >
              <img
                src={logo}
                alt="Thentic Liquor"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-cinzel font-bold text-base tracking-[0.2em] gold-text">THENTIC</span>
              <span className="font-script italic text-[11px] text-gold/60 tracking-widest">Liquor</span>
            </div>
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

          {/* Desktop CTA */}
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
            className="md:hidden text-cream p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ zIndex: 10000, position: 'relative' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
          background: 'rgba(13,13,13,0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '32px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Logo inside mobile menu */}
        <div className="flex items-center gap-3 mb-8">
          <div className="rounded-full overflow-hidden" style={{ width: 44, height: 44, background: '#fff', padding: 2 }}>
            <img src={logo} alt="Thentic Liquor" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div>
            <div className="font-cinzel font-bold text-base tracking-[0.2em] gold-text">THENTIC</div>
            <div className="font-script italic text-[11px] text-gold/60">Liquor</div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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