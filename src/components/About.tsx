import { Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'We source only the finest packaging materials that meet international quality standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced team is ready to help you find the perfect packaging solution.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast processing and delivery to keep your business moving forward.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile for every client.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose PackPro
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for all packaging needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white border-opacity-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Serving Businesses Nationwide
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With years of experience in the packaging industry, we understand the unique needs of businesses
              across various sectors. From small startups to large enterprises, we provide tailored packaging
              solutions that protect your products and enhance your brand image.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
