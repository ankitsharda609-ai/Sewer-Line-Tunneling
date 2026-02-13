
import React from 'react';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import FAQSection from './components/FAQSection';
import { SERVICES, BUSINESS_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/sewer/1920/1080" 
            alt="Construction background" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Under-Slab Sewer Line <span className="text-blue-400 italic">Tunneling</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Sugar Land's premier choice for mess-free foundation plumbing repairs. Save your floors and stay in your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-10 py-4 rounded-lg transition-all shadow-xl hover:shadow-orange-500/20"
            >
              Get a Free Estimate
            </a>
            <a 
              href="#guide" 
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg font-bold px-10 py-4 rounded-lg transition-all"
            >
              Why Tunneling?
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Specialty Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide precision underground excavation services tailored to your plumbing needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:border-blue-500 transition-all group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <i className={`fas ${service.icon} text-3xl text-blue-600 group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Content Section */}
      <section id="guide" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-8 border-orange-500 pl-6">
              The Ultimate Guide to Sewer Line Tunneling in Sugar Land
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When a sewer line fails beneath your home, the traditional solution—jackhammering through your foundation—is often a nightmare for homeowners. That’s where <strong className="text-blue-600">Under-Slab Tunneling</strong> comes in.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 mb-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What is Sewer Line Tunneling?</h3>
              <p className="text-blue-800">
                Sewer line tunneling is a non-invasive method of accessing plumbing lines by digging a 3x3 foot tunnel beneath your foundation from an exterior access point. This allows our plumbers to repair or replace pipes without ever stepping foot inside your home with heavy machinery.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tunneling Over Slab Breakouts</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-900">Zero Interior Mess:</strong> 
                  <span className="text-gray-600 ml-1">No concrete dust in your air ducts, no debris on your carpets, and zero risk to your expensive hardwood flooring.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-900">Stay in Your Home:</strong> 
                  <span className="text-gray-600 ml-1">Unlike traditional methods that require you to move out while they jackhammer your kitchen, you can live normally during repairs.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-900">Structural Integrity:</strong> 
                  <span className="text-gray-600 ml-1">We protect your foundation by avoiding the "Swiss cheese" effect of drilling through concrete from the top down.</span>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <div>
                  <strong className="text-gray-900">Cost-Effective:</strong> 
                  <span className="text-gray-600 ml-1">While the labor is intensive, you save thousands in floor replacement, professional cleaning, and hotel costs.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <i className="fas fa-pipe text-blue-400 text-3xl"></i>
              <span className="font-bold text-2xl tracking-tight">
                SewerLine <span className="text-blue-400">Tunneling</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Professional under-slab tunneling services for homeowners in Sugar Land and the Greater Houston area. We specialize in non-invasive plumbing access and precision foundation repairs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400">Our Services</a></li>
              <li><a href="#guide" className="hover:text-blue-400">Benefits Guide</a></li>
              <li><a href="#faq" className="hover:text-blue-400">Common Questions</a></li>
              <li><a href="#" className="hover:text-blue-400">Get an Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Licensed & Insured.</p>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
