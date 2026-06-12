'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10">
            <div className="flex justify-between items-center px-6 py-4 md:px-10 max-w-[1400px] mx-auto">
                <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    <span className="gradient-text">Tech360</span> <span className="text-white">Mini</span>
                </Link>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-300 hover:text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {['Home', 'Products', 'About', 'Contact'].map(item => (
                        <Link 
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-gray-400 font-medium hover:text-white transition-colors text-sm uppercase tracking-wider"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <nav className="md:hidden flex flex-col bg-[#121212] border-b border-white/10 px-6 py-4 gap-2 absolute w-full left-0 top-full shadow-2xl">
                    {['Home', 'Products', 'About', 'Contact'].map(item => (
                        <Link 
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 font-medium hover:text-white transition-colors text-lg py-3 border-b border-white/5 last:border-0"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}