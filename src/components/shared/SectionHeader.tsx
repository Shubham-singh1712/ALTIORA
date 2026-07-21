'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && (
        <motion.span
          variants={itemVariants}
          className="text-gold text-xs tracking-[0.3em] uppercase font-medium"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] text-white"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          variants={itemVariants}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  );
}
