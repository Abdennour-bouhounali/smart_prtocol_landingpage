import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Send, CheckCircle2, User } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main style={{ padding: '160px 0', minHeight: '100vh', position: 'relative', backgroundColor: '#F8FAFC', overflow: 'hidden' }}>

      {/* Subtle Background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle at top right, #3B82F6 0%, transparent 40%)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-black)', letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}
          >
            لنتحدث عن رحلتك مع SMART
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', maxWidth: 600, marginInline: 'auto' }}
          >
            سواء كان لديك استفسار حول المنهجية، أو تريد مشاركة قصة نجاحك، يسعدني دائماً التواصل معك.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-10)', alignItems: 'flex-start' }}>

          {/* Right Column (RTL Left equivalent) - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ backgroundColor: '#fff', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 80, height: 80, borderRadius: '24px', backgroundColor: 'var(--color-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-6)', boxShadow: '0 10px 25px -5px rgba(0,102,204,0.3)' }}>
                <User size={40} />
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '4px', color: 'var(--color-black)' }}>عبد النور</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 'var(--space-8)' }}>مبتكر بروتوكول SMART</p>

              <blockquote style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', lineHeight: 1.8, paddingRight: '20px', borderRight: '4px solid var(--color-gray-200)', marginBottom: 'var(--space-8)' }}>
                "رسالتي هي أن أجعل التفكير الرياضي أكثر وضوحاً لكل طالب، لأن الرياضيات لغة وليست مجرد حسابات."
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-gray-500)', fontWeight: 600 }}>
                  <Mail size={20} color="var(--color-gray-400)" />
                  abdennour.bouhounali@gmail.com
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-gray-500)', fontWeight: 600 }}>
                  <Clock size={20} color="var(--color-gray-400)" />
                  الرد خلال 24 - 48 ساعة
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column (RTL Right equivalent) - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ backgroundColor: '#fff', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', minHeight: 480, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{ display: 'inline-flex', width: 80, height: 80, borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#10b981', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-6)' }}>
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-black)', marginBottom: 'var(--space-4)' }}>شكراً لتواصلك!</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)', lineHeight: 1.6, maxWidth: 300, marginInline: 'auto' }}>
                      تم استلام رسالتك بنجاح. سأقوم بقراءتها والرد عليك في أقرب وقت ممكن.
                    </p>
                    <button onClick={() => setFormState('idle')} className="btn btn--secondary" style={{ marginTop: 'var(--space-8)' }}>
                      إرسال رسالة أخرى
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
                  >
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-gray-600)' }}>الاسم الكامل</label>
                      <input type="text" required
                        style={{ width: '100%', padding: '16px 20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '1rem', fontFamily: 'inherit', transition: 'all 0.3s' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-gray-600)' }}>البريد الإلكتروني</label>
                      <input type="email" required direction="ltr"
                        style={{ width: '100%', padding: '16px 20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '1rem', fontFamily: 'inherit', transition: 'all 0.3s', direction: 'ltr' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-gray-600)' }}>كيف يمكنني مساعدتك؟</label>
                      <textarea required rows={4}
                        style={{ width: '100%', padding: '16px 20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '1rem', fontFamily: 'inherit', transition: 'all 0.3s', resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" disabled={formState === 'loading'} className="btn btn--primary btn--large" style={{ marginTop: 'var(--space-4)', width: '100%', justifyContent: 'center', padding: '18px', fontSize: '1.1rem', borderRadius: '12px', gap: '8px' }}>
                      {formState === 'loading' ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: 24, height: 24, border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }} />
                      ) : (
                        <>إرسال الرسالة <Send size={20} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
