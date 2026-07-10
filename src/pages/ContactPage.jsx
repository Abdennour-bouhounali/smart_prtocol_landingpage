import React from 'react';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: 600 }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          تواصل معنا
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', marginBottom: 'var(--space-12)' }}>
          هل لديك أي استفسار حول بروتوكول SMART أو الكتاب؟ نحن هنا للإجابة.
        </p>
        
        <form 
          onSubmit={(e) => { e.preventDefault(); alert('تم إرسال رسالتك بنجاح!'); }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 600, fontSize: '0.875rem' }}>الاسم الكامل</label>
            <input 
              type="text" 
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 600, fontSize: '0.875rem' }}>البريد الإلكتروني</label>
            <input 
              type="email" 
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                direction: 'ltr'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 600, fontSize: '0.875rem' }}>الرسالة</label>
            <textarea 
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>
          <button type="submit" className="btn btn--primary btn--large" style={{ marginTop: 'var(--space-4)', width: '100%', justifyContent: 'center' }}>
            إرسال الرسالة
          </button>
        </form>
      </div>
    </main>
  );
}
