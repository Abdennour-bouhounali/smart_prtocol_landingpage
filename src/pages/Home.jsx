import React from 'react';
import Hero from '../components/Hero.jsx';
import Diagnosis from '../components/Diagnosis.jsx';
import BookShowcase from '../components/BookShowcase.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Diagnosis />
      <BookShowcase />
      <FinalCTA />
    </main>
  );
}
