import { ArrowRight, Package2, Truck, Shield } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full border border-blue-400 border-opacity-30">
            <span className="text-blue-300 text-sm font-medium">Premium Packaging Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Protect Your Products with
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Quality Packaging
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            From boxes to bubble wrap, we provide comprehensive packaging solutions for businesses of all sizes.
            Quality materials, competitive prices, fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToProducts}
              className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              <span className="font-semibold">Browse Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-8 py-4 rounded-full transition-all border border-white border-opacity-30 backdrop-blur-sm"
            >
              <span className="font-semibold">Get a Quote</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Package2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Wide Selection</h3>
              <p className="text-gray-400 text-sm text-center">Extensive range of packaging materials</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Fast Delivery</h3>
              <p className="text-gray-400 text-sm text-center">Quick turnaround on all orders</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Quality Assured</h3>
              <p className="text-gray-400 text-sm text-center">Premium materials you can trust</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
