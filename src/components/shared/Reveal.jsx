import { motion } from 'framer-motion';

/**
 * Fades its content up into view the first time it scrolls onto the screen.
 * Tip: put hover effects on an element INSIDE Reveal, not on Reveal itself.
 */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
