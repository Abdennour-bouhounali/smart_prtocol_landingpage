import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import ProtocolPage from './pages/ProtocolPage.jsx';
import DictionaryPage from './pages/DictionaryPage.jsx';
import DemoPage from './pages/DemoPage.jsx';
import BookPage from './pages/BookPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protocol" element={<ProtocolPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
