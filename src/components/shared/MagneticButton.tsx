'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.3;
      const deltaY = (e.clientY - centerY) * 0.3;
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  const baseClasses = 'relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer overflow-hidden group';

  const variantClasses = {
    primary: 'bg-gold text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]',
    secondary: 'border border-white/20 text-white hover:border-gold hover:text-gold backdrop-blur-sm',
    ghost: 'text-gold hover:text-white',
  };

  const Tag = href ? 'a' : 'button';

  return (
    <div ref={ref} className="inline-block">
      <motion.div style={{ x: springX, y: springY }}>
        <Tag
          href={href}
          onClick={onClick}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
          {variant === 'primary' && (
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          )}
        </Tag>
      </motion.div>
    </div>
  );
}
