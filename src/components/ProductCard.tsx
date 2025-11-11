import { MessageCircle, Check } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppInquiry = () => {
    const message = `Hi, I'm interested in: ${product.name}`;
    const phoneNumber = '1234567890';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {product.popular && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Popular
        </div>
      )}

      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{product.description}</p>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleWhatsAppInquiry}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Inquire on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
