import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'boxes', name: 'Boxes' },
    { id: 'bags', name: 'Bags' },
    { id: 'protection', name: 'Protection' },
    { id: 'wrapping', name: 'Wrapping' },
    { id: 'tape', name: 'Tape' },
    { id: 'labels', name: 'Labels' },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium packaging materials for all your business needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
