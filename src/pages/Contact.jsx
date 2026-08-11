import { useEffect, useState } from 'react';
import { MessageCircle, MapPin } from "lucide-react";

function IgIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
import { getWhatsAppLink } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const r1 = useScrollReveal();
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  function handleSubmit() {
    if (!form.name || !form.message) return;
    const msg = `Hi Thentic! My name is ${form.name}. ${form.message}${form.contact ? ` (Contact: ${form.contact})` : ''}`;
    window.open(`https://wa.me/${getWhatsAppLink('').split('wa.me/')[1].split('?')[0]}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={r1} className="section-reveal text-center mb-16">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-4">Get In Touch</div>
          <h1 className="font-cinzel font-bold text-5xl tracking-widest text-cream mb-4">CONTACT US</h1>
          <div className="divider max-w-xs mx-auto my-6"><span className="text-gold/30 text-xs px-4">✦</span></div>
          <p className="font-script italic text-xl text-gold/70">We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-8 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.2)' }}>
            <h2 className="font-cinzel font-bold text-lg tracking-wider text-cream mb-6">Send a message</h2>
            <div className="space-y-5">
              {[
                { key: 'name', label: 'Your name', placeholder: 'e.g. Chidi Okonkwo', type: 'text' },
                { key: 'contact', label: 'Email or phone (optional)', placeholder: 'your@email.com or 080XXXXXXXX', type: 'text' },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full bg-transparent px-4 py-3 rounded-sm font-body text-sm text-cream placeholder-muted focus:outline-none transition-all duration-300"
                    style={{ border: '0.5px solid rgba(201,168,76,0.25)', background: 'rgba(0,0,0,0.2)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                  />
                </div>
              ))}
              <div>
                <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need — orders, bulk pricing, events, anything..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-transparent px-4 py-3 rounded-sm font-body text-sm text-cream placeholder-muted focus:outline-none transition-all duration-300 resize-none"
                  style={{ border: '0.5px solid rgba(201,168,76,0.25)', background: 'rgba(0,0,0,0.2)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="btn-primary w-full"
                style={{ opacity: sent ? 0.7 : 1 }}
              >
                {sent ? '✓ Sent via WhatsApp' : 'Send via WhatsApp'}
              </button>
              <p className="font-body text-[11px] text-muted text-center">
                This will open WhatsApp with your message pre-filled.
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: MessageCircle, label: 'WhatsApp', value: 'Message us directly', color: '#25D366', href: getWhatsAppLink() },
              { icon: IgIcon, label: 'Instagram', value: '@thenticliquor', color: '#E1306C', href: 'https://instagram.com' },
              { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', color: '#C9A84C', href: null },
            ].map(({ icon: Icon, label, value, color, href }) => {
              const inner = (
                <div className="flex items-center gap-5 p-6 rounded-xl transition-all duration-300 group"
                  style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${color}22` }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-0.5">{label}</div>
                    <div className="font-body text-sm text-cream">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={e => { e.currentTarget.firstChild.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.firstChild.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.firstChild.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.firstChild.style.transform = 'none'; }}>
                  {inner}
                </a>
              ) : <div key={label}>{inner}</div>;
            })}

            <div className="p-6 rounded-xl mt-4" style={{ background: 'linear-gradient(135deg, #8B1A1A22, #5C0E0E33)', border: '0.5px solid rgba(139,26,26,0.3)' }}>
              <div className="font-cinzel font-bold text-sm tracking-wider text-cream mb-2">Delivery Areas</div>
              <p className="font-body text-xs text-muted leading-relaxed">
                We deliver across Lagos. Message us with your location and we'll confirm availability and delivery time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
