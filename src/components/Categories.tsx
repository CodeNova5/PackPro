import { Package, ShoppingBag, Layers, Shield, Stamp, Tag } from 'lucide-react';

const categories = [
  {
    name: 'Boxes & Cartons',
    description: 'Durable shipping and storage solutions',
    Icon: Package,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Bags & Pouches',
    description: 'Versatile packaging for retail and food',
    Icon: ShoppingBag,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Wrapping Materials',
    description: 'Stretch film and protective wraps',
    Icon: Layers,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'Protection & Cushioning',
    description: 'Bubble wrap, foam, and padding',
    Icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Tape & Adhesives',
    description: 'Strong sealing solutions',
    Icon: Stamp,
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'Labels & Stickers',
    description: 'Professional labeling products',
    Icon: Tag,
    gradient: 'from-blue-600 to-blue-700',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive packaging solutions across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.Icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {category.name}
                  </h3>

                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
