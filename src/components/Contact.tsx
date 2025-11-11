import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppContact = () => {
    const message = 'Hi, I would like to inquire about your packaging products';
    const phoneNumber = '1234567890';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppQuote = () => {
    const message = 'Hi, I would like to request a quote for packaging materials';
    const phoneNumber = '1234567890';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to order or have questions? Contact us via WhatsApp for instant support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Our team is ready to assist you with product inquiries, quotes, and orders.
                Connect with us on WhatsApp for the fastest response.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-blue-100">+1 (234) 567-890</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-blue-100">info@packpro.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-blue-100">123 Packaging Street, Business District</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white border-opacity-20">
                <p className="text-blue-100 text-sm">
                  Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-center text-slate-900 mb-3">
                  General Inquiry
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Have questions about our products or services? Get instant answers on WhatsApp.
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Chat on WhatsApp</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-center text-slate-900 mb-3">
                  Request a Quote
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Need a custom quote for bulk orders? Send us your requirements via WhatsApp.
                </p>
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Get Quote on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
