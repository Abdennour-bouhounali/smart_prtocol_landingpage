import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '★★★★★', label: 'مصمم لطلاب البكالوريا' },
  { value: '5', label: 'مراحل SMART أساسية' },
  { value: '+100', label: 'ترجمة رياضية' },
  { value: 'عشرات', label: 'التمارين المحلولة' },
];

export default function StatsSection() {
  return (
    <section style={{ padding: 'var(--space-12) 0', backgroundColor: 'var(--color-gray-50)', borderBottom: '1px solid var(--color-gray-100)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                padding: 'var(--space-8) var(--space-6)',
                backgroundColor: 'var(--color-white)',
                borderRadius: '20px',
                border: '1px solid var(--color-gray-200)',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '12px', letterSpacing: '-0.02em', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-gray-600)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
