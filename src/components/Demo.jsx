import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlockMath, InlineMath } from 'react-katex';
import { useInView } from '../hooks/index.js';

const demoSteps = [
  {
    label: 'S', labelSub: 'الفحص',
    title: 'اقرأ الأسئلة الأربعة أولاً',
    body: 'قبل أن تبدأ بالحساب، اقرأ التمرين كاملاً. السؤال الثالث يطلب إثبات مقارب مائل.',
    insight: 'هذا تلميح خفي: الدالة يمكن كتابتها على شكل f(x) = (x-1) + \\dots',
    insightMath: 'f(x) = (x-1) + \\dots',
  },
  {
    label: 'M', labelSub: 'الترجمة',
    title: 'ترجم الهدف إلى رياضيات',
    body: 'مقارب مائل y = x - 1 يعني رياضياً نهاية الفرق تساوي صفراً:',
    math: '\\lim_{x \\to +\\infty} [f(x) - (x - 1)] = 0',
  },
  {
    label: 'A', labelSub: 'الهدف',
    title: 'حدد الشكل الذكي للدالة',
    body: 'بدل حساب المشتقة مباشرة، نكتب الدالة بشكل ذكي عبر القسمة الإقليدية:',
    math: 'f(x) = x - 1 + \\frac{2}{x + 1}',
  },
  {
    label: 'R', labelSub: 'الربط',
    title: 'كل الأسئلة تصبح بسيطة',
    body: 'الشكل الجديد يجعل المشتقة أسهل، وجدول التغيرات واضحاً، والوضعية النسبية بديهية.',
    math: "f'(x) = 1 - \\frac{2}{(x+1)^2} > 0 \\quad \\text{من أجل} \\quad x > -1+\\sqrt{2}",
  },
];

export default function Demo() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const step = demoSteps[active];

  return (
    <section id="demo" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-gray-50)' }}>
      {/* Coordinate grid decoration */}
      <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.03, pointerEvents: 'none' }}
        width="280" height="280" viewBox="0 0 280 280" fill="none">
        {Array.from({length:8}).map((_,i) => <line key={`h${i}`} x1="0" y1={i*36} x2="280" y2={i*36} stroke="black" strokeWidth="1"/>)}
        {Array.from({length:8}).map((_,i) => <line key={`v${i}`} x1={i*36} y1="0" x2={i*36} y2="280" stroke="black" strokeWidth="1"/>)}
      </svg>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'var(--space-12)' }}
        >
          <p className="section-label">مثال تطبيقي</p>
          <h2 className="section-title" style={{ letterSpacing: '-0.025em' }}>SMART في الميدان</h2>
          <p className="section-subtitle">نفس التمرين — مرتين. الأول بدون SMART. الثاني معه.</p>
        </motion.div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-6)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {/* Step navigator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {demoSteps.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
                  padding: 'var(--space-5) var(--space-6)',
                  border: `1.5px solid ${i === active ? 'var(--color-accent)' : 'var(--color-gray-200)'}`,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: i === active ? 'var(--color-accent-light)' : 'var(--color-white)',
                  cursor: 'pointer', textAlign: 'right', width: '100%',
                  boxShadow: i === active ? '0 4px 16px rgba(0,102,204,0.1)' : 'var(--shadow-sm)',
                  transition: 'all 0.25s',
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  backgroundColor: i === active ? 'var(--color-accent)' : 'var(--color-gray-100)',
                  color: i === active ? 'white' : 'var(--color-gray-500)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-mono)',
                }}>
                  {s.label}
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: i === active ? 'var(--color-accent)' : 'var(--color-gray-400)', marginBottom: 3, textTransform: 'uppercase' }}>
                    {s.labelSub}
                  </p>
                  <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: i === active ? 'var(--color-black)' : 'var(--color-gray-600)', lineHeight: 1.4 }}>
                    {s.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-8)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
            boxShadow: 'var(--shadow-md)',
            minHeight: 420,
          }}>
            {/* Function display */}
            <div style={{
              padding: 'var(--space-5)', backgroundColor: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)', textAlign: 'center', direction: 'ltr',
              border: '1px solid var(--color-gray-200)',
            }}>
              <BlockMath math="f(x) = \frac{x^2 + 1}{x + 1}" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', flex: 1 }}
              >
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-2)' }}>
                    {step.labelSub} — {step.label}
                  </p>
                  <p style={{ fontWeight: 600, fontSize: '1.0625rem', lineHeight: 1.5 }}>{step.title}</p>
                </div>

                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.85, margin: 0 }}>{step.body}</p>

                {step.math && (
                  <div style={{
                    padding: 'var(--space-5)', backgroundColor: '#0A0A0A',
                    borderRadius: 'var(--radius-md)', color: '#7dd3fc',
                    direction: 'ltr', textAlign: 'center',
                  }}>
                    <BlockMath math={step.math} />
                  </div>
                )}

                {step.insightMath && (
                  <p style={{
                    color: 'var(--color-accent)', fontSize: '0.9375rem', fontStyle: 'italic',
                    paddingRight: 'var(--space-4)', borderRight: '3px solid var(--color-accent)',
                    lineHeight: 1.7, margin: 0,
                  }}>
                    هذا تلميح خفي: الدالة يمكن كتابتها على شكل <InlineMath math={step.insightMath} />
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-gray-100)' }}>
              {demoSteps.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 20 : 8, height: 8, borderRadius: 4,
                    backgroundColor: i === active ? 'var(--color-accent)' : 'var(--color-gray-200)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
