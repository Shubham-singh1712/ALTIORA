'use client';

import { Camera, Globe, MessageCircle, Mail, ArrowUpRight, Send } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/altiora' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com/company/altiora' },
  {
    icon: Send,
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
  },
  { icon: Mail, label: 'Email', href: 'mailto:hello@altiora.in' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-8 h-8 border border-gold/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-gold/80 rotate-45" />
              </div>
              <span className="text-white font-serif text-xl tracking-[0.15em] uppercase">
                Altiora
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              A premium digital agency for hospitality brands. We craft websites, design menus,
              and create content that elevates your presence and attracts your ideal guests.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6">Get in Touch</p>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:hello@altiora.in"
                  className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                >
                  hello@altiora.in
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/919876543210"
                  className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white/60 text-sm">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wider">
            © {new Date().getFullYear()} Altiora. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Crafted with intention.</span>
            <span className="text-gold/60">◆</span>
            <span>Built for the extraordinary.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
