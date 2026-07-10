import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-black)', padding: 'var(--space-32) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decoration */}
      <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
        viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" fill="none">
        {Array.from({length:10}).map((_,i) => <line key={`h${i}`} x1="0" y1={i*30} x2="1200" y2={i*30} stroke="white" strokeWidth="0.5"/>)}
        {Array.from({length:40}).map((_,i) => <line key={`v${i}`} x1={i*30} y1="0" x2={i*30} y2="300" stroke="white" strokeWidth="0.5"/>)}
      </svg>
      {/* Giant S watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        fontSize: 'min(70vw, 500px)', fontWeight: 900, fontFamily: 'var(--font-mono)',
        color: 'white', opacity: 0.03, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>S</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}
          >
            ابدأ اليوم
          </motion.p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700,
            color: 'var(--color-white)', marginBottom: 'var(--space-6)',
            letterSpacing: '-0.03em', lineHeight: 1.2,
          }}>
            مهما كان مستواك اليوم...
          </h2>
          <p style={{
            fontSize: '1.1875rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.85, marginBottom: 'var(--space-12)', fontStyle: 'italic',
          }}>
            أؤكد لك أن التطور في الرياضيات ممكن جداً بالممارسة الواعية والتدريب المنهجي.
            مهارة حل المشكلات ليست موهبة فطرية، بل عضلة تقوى بالتدريب والانضباط.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link to="/protocol" className="btn btn--primary btn--large">
                ابدأ بتطبيق بروتوكول SMART
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link to="/book" className="btn btn--large" style={{
                backgroundColor: 'transparent', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.25)',
              }}>
                تصفح الكتاب
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
