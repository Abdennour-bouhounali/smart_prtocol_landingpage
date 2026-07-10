import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { smartSteps } from '../data/index.js';
import { illustrationSpecs } from '../data/illustrations.js';
import StepIllustration from './ui/StepIllustration.jsx';

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
});

const letterVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 0.04, scale: 1, transition: { duration: 1.4, ease: 'easeOut' } },
};

// ─── Single Step Section ─────────────────────────────────────────────────────

function StepSection({ step, index, onEnter }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { amount: 0.3, once: false });
  const isEven = index % 2 === 0;
  const illustrationSpec = illustrationSpecs[index];

  useEffect(() => { if (inView) onEnter(index); }, [inView, index, onEnter]);

  return (
    <section
      id={`step-${index}`}
      ref={ref}
      aria-labelledby={`step-title-${index}`}
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: 'var(--space-24) 0',
        overflow: 'hidden',
      }}
    >
      {/* Giant letter background */}
      <motion.div
        variants={letterVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'min(58vw, 500px)', fontWeight: 900,
          fontFamily: 'var(--font-mono)', lineHeight: 1,
          color: 'var(--color-black)', pointerEvents: 'none',
          userSelect: 'none', zIndex: 0,
        }}
      >
        {step.letter}
      </motion.div>

      <div
        className="container"
        style={{
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'center',
          direction: 'rtl',
        }}
      >
        {/* ── Text ── */}
        <div style={{ order: isEven ? 0 : 1 }}>

          {/* Header: letter + name */}
          <motion.div
            variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '4rem', color: 'var(--color-accent)', lineHeight: 1 }}>
              {step.letter}
            </span>
            <div style={{ width: 2, height: 56, backgroundColor: 'var(--color-gray-200)', borderRadius: 1 }} />
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 4 }}>
                {step.nameEN}
              </p>
              <h2 id={`step-title-${index}`} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
                {step.nameAR}
              </h2>
            </div>
          </motion.div>

          {/* Rule card */}
          <motion.div
            variants={fadeUp(0.12)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{
              backgroundColor: 'var(--color-gray-50)',
              borderRight: '4px solid var(--color-accent)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-6)',
            }}
          >
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>
              القاعدة
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, margin: 0 }}>{step.rule}</p>
          </motion.div>

          {/* Procedure */}
          <motion.div
            variants={fadeUp(0.22)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ marginBottom: 'var(--space-6)' }}
          >
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gray-400)', marginBottom: 'var(--space-3)' }}>
              الإجراء
            </p>
            <p style={{ lineHeight: 1.9, color: 'var(--color-gray-700)', margin: 0 }}>{step.procedure}</p>
          </motion.div>

          {/* Insight card */}
          <motion.div
            variants={fadeUp(0.32)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{
              backgroundColor: 'white',
              border: '1px solid var(--color-gray-200)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-5) var(--space-6)',
              marginBottom: 'var(--space-6)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gray-400)', marginBottom: 'var(--space-2)' }}>
              الفكرة المنهجية
            </p>
            <p style={{ lineHeight: 1.9, color: 'var(--color-gray-600)', fontStyle: 'italic', margin: 0 }}>{step.insight}</p>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.42 } } }}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}
          >
            {step.tags.map(tag => (
              <motion.span
                key={tag}
                variants={fadeUp(0)}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="tag"
                style={{ cursor: 'default', fontSize: '0.8125rem' }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── Illustration ── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
          }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ order: isEven ? 1 : 0, display: 'flex', justifyContent: 'center' }}
        >
          <StepIllustration spec={illustrationSpec} animate={inView} />
        </motion.div>
      </div>

      {/* Bottom connector line */}
      {index < smartSteps.length - 1 && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: 1, height: 56,
            background: 'linear-gradient(to bottom, var(--color-gray-200), transparent)',
          }}
        />
      )}
    </section>
  );
}

// ─── Sticky Timeline ─────────────────────────────────────────────────────────

function Timeline({ activeIndex }) {
  return (
    <nav
      aria-label="تقدم مراحل SMART"
      style={{
        position: 'fixed', top: '50%', left: 24,
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 0, zIndex: 50,
      }}
    >
      {smartSteps.map((step, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        return (
          <React.Fragment key={step.letter}>
            <motion.a
              href={`#step-${i}`}
              aria-label={step.nameAR}
              aria-current={isActive ? 'step' : undefined}
              animate={{
                scale: isActive ? 1.2 : 1,
                backgroundColor: isActive ? 'var(--color-accent)' : 'white',
                borderColor: isActive || isPast ? 'var(--color-accent)' : 'var(--color-gray-300)',
              }}
              transition={{ duration: 0.28 }}
              style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '2px solid var(--color-gray-300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.75rem',
                color: isActive ? 'white' : isPast ? 'var(--color-accent)' : 'var(--color-gray-400)',
                textDecoration: 'none', cursor: 'pointer',
                boxShadow: isActive ? '0 4px 14px rgba(0,102,204,0.25)' : 'none',
              }}
            >
              {step.letter}
            </motion.a>
            {i < smartSteps.length - 1 && (
              <motion.div
                animate={{ backgroundColor: isPast ? 'var(--color-accent)' : 'var(--color-gray-200)' }}
                transition={{ duration: 0.5 }}
                style={{ width: 2, height: 28, borderRadius: 1 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function Protocol() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="protocol" style={{ position: 'relative' }}>
      {/* Section header */}
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <p className="section-label">المنهجية</p>
        <h2 className="section-title" style={{ letterSpacing: '-0.03em' }}>بروتوكول SMART</h2>
        <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 520 }}>
          خمس مراحل متتابعة تحول الفوضى الذهنية إلى خطوات واضحة ومنظمة.
        </p>

        {/* Desktop progress dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 'var(--space-8)' }}>
          {smartSteps.map((s, i) => (
            <a key={s.letter} href={`#step-${i}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%',
                border: `2px solid ${i === activeIndex ? 'var(--color-accent)' : 'var(--color-gray-200)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.875rem',
                color: i === activeIndex ? 'var(--color-accent)' : 'var(--color-gray-400)',
                backgroundColor: i === activeIndex ? 'var(--color-accent-light)' : 'white',
                transition: 'all 0.3s',
              }}>{s.letter}</div>
              <span style={{ fontSize: '0.6rem', color: 'var(--color-gray-400)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.nameEN}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Sticky sidebar — hidden on small screens */}
      <style>{`@media (max-width: 900px) { #smart-timeline { display: none !important; } }`}</style>
      <div id="smart-timeline"><Timeline activeIndex={activeIndex} /></div>

      {/* All 5 step blocks */}
      {smartSteps.map((step, index) => (
        <StepSection
          key={step.letter}
          step={step}
          index={index}
          onEnter={setActiveIndex}
        />
      ))}
    </div>
  );
}
