import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Award, ShoppingCart, ArrowLeft } from 'lucide-react';
import MathBackground from './MathBackground';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: 'var(--space-20)', backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
      <MathBackground />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'inline-block', marginBottom: 'var(--space-6)', padding: '8px 16px', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700 }}>
              الكتاب المنهجي الأول
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 'var(--space-6)', letterSpacing: '-0.02em', color: 'var(--color-black)' }}>
              أول كتاب يعلمك منهجية <br/> <span style={{ color: 'var(--color-accent)' }}>التفكير</span> قبل الحل.
            </h1>
            
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-gray-500)', marginBottom: 'var(--space-10)' }}>
              بدلاً من حفظ خطوات الحل، ستتعلم كيف تحلل أي مسألة، وتكتشف فكرتها، وتبني استراتيجية الحل بنفسك باستخدام بروتوكول SMART.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
              <Link to="/contact" className="btn btn--primary btn--large" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', fontSize: '1.125rem', borderRadius: '14px', fontWeight: 700 }}>
                 احصل على نسختك <ShoppingCart size={22} />
              </Link>
              <a href="#preview" className="btn btn--large" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', fontSize: '1.125rem', borderRadius: '14px', border: '1px solid var(--color-gray-200)', backgroundColor: 'transparent', color: 'var(--color-black)', fontWeight: 600, transition: 'all 0.2s ease' }} onMouseOver={(e)=> e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'} onMouseOut={(e)=> e.currentTarget.style.backgroundColor = 'transparent'}>
                تصفح المنهجية <ArrowLeft size={22} />
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target size={22} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-gray-600)' }}>5 مراحل منهجية</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={22} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-gray-600)' }}>مصمم لطلاب البكالوريا</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', paddingBottom: '130%', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 60%)', zIndex: 0 }} />
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/images/book-3d.png" 
              alt="كتاب SMART"
              style={{
                width: '100%',
                maxWidth: 480,
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 40px 50px rgba(0,0,0,0.15))'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
