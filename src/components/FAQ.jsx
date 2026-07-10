import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../data/index.js';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background decoration */}
      <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.025, pointerEvents: 'none' }}
        width="300" height="300" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="120" stroke="var(--color-black)" strokeWidth="1" />
        <circle cx="150" cy="150" r="80" stroke="var(--color-black)" strokeWidth="1" />
        <circle cx="150" cy="150" r="40" stroke="var(--color-black)" strokeWidth="1" />
      </svg>

      <div className="container container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}
        >
          <p className="section-label">الأسئلة الشائعة</p>
          <h2 className="section-title" style={{ letterSpacing: '-0.02em' }}>كل ما تريد معرفته</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            إجابات واضحة على الأسئلة الأكثر تكراراً.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: `1px solid ${isOpen ? 'var(--color-accent)' : 'var(--color-gray-200)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 20px rgba(0,102,204,0.08)' : 'var(--shadow-sm)',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 'var(--space-6) var(--space-8)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'right',
                    cursor: 'pointer',
                    gap: 'var(--space-4)',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '1.0625rem', flex: 1, lineHeight: 1.5 }}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      width: 28, height: 28, borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-accent)' : 'var(--color-gray-100)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', fontWeight: 700, flexShrink: 0,
                      color: isOpen ? 'white' : 'var(--color-gray-500)',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 var(--space-8) var(--space-6)', borderTop: '1px solid var(--color-gray-100)' }}>
                        <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.9, paddingTop: 'var(--space-4)', margin: 0 }}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
