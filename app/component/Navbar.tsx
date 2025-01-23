"use client";
// component/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import '../globals.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link href="/">Mijn Portfolio</Link>
      </div>

      {/* Navigatie links */}
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/" className="navbar-link">Home</Link>
        <Link href="/pages/projects/" className="navbar-link">Projecten</Link>
        <Link href="/pages/vaardigheden/" className="navbar-link">Vaardigheden</Link>
        <Link href="/pages/contact" className="navbar-link">Contact</Link>
      
        <a href="/cv/cv.pptx" download>
  <button className="navbar-link">Download CV</button>
</a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
