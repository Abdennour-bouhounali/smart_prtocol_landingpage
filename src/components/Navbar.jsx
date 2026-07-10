import React, { useState, useEffect } from 'react';
import { navigation } from '../data/index.js';
import { useScrollY } from '../hooks/index.js';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;
  const location = useLocation();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 0',
        backgroundColor: scrolled ? 'rgba(250,250,250,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-gray-200)' : '1px solid transparent',
        transition: 'all var(--transition-base)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.03em', fontFamily: 'var(--font-mono)' }}>
          SMART
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-gray-600)',
                  borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                  paddingBottom: '4px',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = 'var(--color-black)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = 'var(--color-gray-600)';
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/book" className="btn btn--primary" style={{ padding: '10px 20px', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            احصل على الكتاب <ShoppingCart size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
