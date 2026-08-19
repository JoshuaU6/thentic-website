import { useEffect, useState } from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';
import { getWhatsAppLink, CONTACT_EMAIL } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

function IgIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Contact() {
  const r1 = useScrollReveal();
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  async function handleSubmit() {
    if (!form.name || !form.message) return;
    setSending(true);

    // 1. Open WhatsApp with pre-filled message
    const waMsg = `Hi Thentic! My name is ${form.name}. ${form.message}${form.contact ? ` (Contact: ${form.contact})` : ''}`;
    window.open(`https://wa.me/2349029378047?text=${encodeURIComponent(waMsg)}`, '_blank');

    // 2. Also send to email via mailto (opens mail client as backup)
    const emailSubject = `Website Enquiry from ${form.name}`;
    const emailBody = `Name: ${form.name}\nContact: ${form.contact || 'Not provided'}\n\nMessage:\n${form.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Small delay so WhatsApp opens first
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 800);

    setSending(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', contact: '', message: '' });
    }, 5000);
  }

  const inputStyle = {
    border: '0.5px solid rgba(201,168,76,0.25)',
    background: 'rgba(0,0,0,0.2)',
  };

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={r1} className="section-reveal text-center mb-16">
          <div className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-4">Get In Touch</div>
          <h1 className="font-cinzel font-bold text-5xl tracking-widest text-cream mb-4">CONTACT US</h1>
          <div className="divider max-w-xs mx-auto my-6"><span className="text-gold/30 text-xs px-4">✦</span></div>
          <p className="font-script italic text-xl text-gold/70">We would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="p-8 rounded-xl" style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.2)' }}>
            <h2 className="font-cinzel font-bold text-lg tracking-wider text-cream mb-2">Send a message</h2>
            <p className="font-body text-xs text-muted mb-6">
              Your message will be sent to us via WhatsApp and email simultaneously.
            </p>

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
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                  />
                </div>
              ))}

              <div>
                <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need: orders, bulk pricing, events, anything..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-transparent px-4 py-3 rounded-sm font-body text-sm text-cream placeholder-muted focus:outline-none transition-all duration-300 resize-none"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.25)'}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={sending || !form.name || !form.message}
                className="btn-primary w-full"
                style={{ opacity: (sending || (!form.name || !form.message)) ? 0.6 : 1 }}
              >
                {sent ? '✓ Message Sent' : sending ? 'Sending...' : 'Send Message'}
              </button>

              {/* Dual send note */}
              <div className="flex items-start gap-3 p-3 rounded-sm" style={{ background: 'rgba(201,168,76,0.05)', border: '0.5px solid rgba(201,168,76,0.1)' }}>
                <span className="text-gold/40 text-xs mt-0.5">✦</span>
                <p className="font-body text-[11px] text-muted leading-relaxed">
                  Sends via WhatsApp and opens your email app to {CONTACT_EMAIL} at the same time.
                </p>
              </div>
            </div>
          </div>

          {/* Contact info cards */}
          <div className="space-y-4">
            {[
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: '+234 902 937 8047',
                sub: 'Tap to message us directly',
                color: '#25D366',
                href: getWhatsAppLink(),
              },
              {
                icon: Mail,
                label: 'Email',
                value: CONTACT_EMAIL,
                sub: 'We respond within 24 hours',
                color: '#C9A84C',
                href: `mailto:${CONTACT_EMAIL}`,
              },
              {
                icon: IgIcon,
                label: 'Instagram',
                value: '@thenticmix',
                sub: 'Follow us and DM for orders',
                color: '#E1306C',
                href: 'https://instagram.com/thenticmix',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Lagos, Nigeria',
                sub: 'Delivery available across Lagos',
                color: '#C9A84C',
                href: null,
              },
            ].map(({ icon: Icon, label, value, sub, color, href }) => {
              const card = (
                <div
                  className="flex items-center gap-5 p-5 rounded-xl transition-all duration-300"
                  style={{ background: '#1E1208', border: '0.5px solid rgba(201,168,76,0.15)' }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-0.5">{label}</div>
                    <div className="font-body text-sm text-cream font-medium">{value}</div>
                    {sub && <div className="font-body text-[11px] text-muted mt-0.5">{sub}</div>}
                  </div>
                  {href && (
                    <div className="ml-auto text-gold/30 text-sm">→</div>
                  )}
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="block hover:-translate-y-0.5 transition-transform duration-200"
                  onMouseEnter={e => e.currentTarget.firstChild.style.borderColor = 'rgba(201,168,76,0.4)'}
                  onMouseLeave={e => e.currentTarget.firstChild.style.borderColor = 'rgba(201,168,76,0.15)'}
                >
                  {card}
                </a>
              ) : (
                <div key={label}>{card}</div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}