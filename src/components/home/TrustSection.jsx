import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, BrainCircuit, Target } from 'lucide-react';

const stats = [
  { value: '5+', label: 'سنوات من التدريس والتطوير', icon: BrainCircuit },
  { value: '100+', label: 'تمرين بكالوريا محلل رياضياً', icon: Target },
  { value: '1', label: 'منهجية تفكير موحدة', icon: BookOpen },
  { value: 'آلاف', label: 'الطلاب يبحثون عن الحل الذكي', icon: Users }
];

export default function TrustSection() {
  return (
    <section style={{ padding: 'var(--space-30) 0', backgroundColor: 'var(--color-white)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--color-black)', marginBottom: 'var(--space-4)', letterSpacing: '-0.02em' }}>
            بنيت على الخبرة. صممت للنتيجة.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: 650, marginInline: 'auto' }}>
            بروتوكول SMART ليس مجرد أفكار نظرية، بل هو حصيلة تحليل عميق لأخطاء الطلاب وطرق تفكيرهم.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-8)' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: 'var(--space-10) var(--space-6)', backgroundColor: 'var(--color-gray-50)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--color-gray-100)' }}
            >
              <div style={{ width: 64, height: 64, backgroundColor: 'var(--color-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginInline: 'auto', marginBottom: 'var(--space-6)', color: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
                <stat.icon size={28} strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--color-black)', marginBottom: 'var(--space-2)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-gray-500)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
