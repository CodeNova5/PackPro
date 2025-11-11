import { Package, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Package className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">PackPro</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-200 hover:text-blue-400 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('categories')} className="text-gray-200 hover:text-blue-400 transition-colors">
              Categories
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-blue-400 transition-colors">
              Contact
            </button>
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20packaging%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-200 hover:text-blue-400 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="block w-full text-left text-gray-200 hover:text-blue-400 transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-200 hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-200 hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20packaging%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
