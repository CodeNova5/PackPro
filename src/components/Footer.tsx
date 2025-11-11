import { Package, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">PackPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium packaging solutions. Quality materials, competitive prices.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Boxes & Cartons</li>
              <li>Bags & Pouches</li>
              <li>Wrapping Materials</li>
              <li>Protection & Cushioning</li>
              <li>Tape & Adhesives</li>
              <li>Labels & Stickers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@packpro.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Packaging Street, Business District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PackPro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-400 transition-colors">Shipping Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
