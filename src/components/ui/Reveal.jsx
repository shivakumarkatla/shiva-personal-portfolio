import { motion, useReducedMotion } from "motion/react";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  li: motion.li,
};

/**
 * Fades content in (with a short rise) the first time it scrolls into view.
 * Renders a plain element when the visitor prefers reduced motion.
 */
function Reveal({
  as = "div",
  delay = 0,
  y = 16,
  amount = 0.2,
  className,
  children,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as;

    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motionTags[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.3, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
