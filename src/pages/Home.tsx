import { Link } from 'react-router-dom';
import { Search, Users, Phone, Droplet, Zap, Hammer, Paintbrush, HardHat, PenTool, CheckCircle2, Star } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Live in Jhanjharpur, Bihar 🎉
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 tracking-tight mb-6">
              Find Trusted Home Service Providers in <span className="text-primary">Jhanjharpur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Connect directly with verified plumbers, electricians, carpenters, painters and contractors. No middleman. No commission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/find-services"
                className="w-full sm:w-auto px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Find a Provider
              </Link>
              <Link
                to="/house-plans"
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-primary text-base font-medium rounded-full text-primary bg-white hover:bg-red-50 transition-colors"
              >
                Get House Plan
              </Link>
            </div>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200&h=600" 
              alt="Happy home owner with workers" 
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-red-400/30">
            <div className="px-4">
              <div className="text-3xl font-heading font-bold text-white mb-1">25+</div>
              <div className="text-red-100 text-sm font-medium">Verified Providers</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-heading font-bold text-white mb-1">5</div>
              <div className="text-red-100 text-sm font-medium">Service Categories</div>
            </div>
            <div className="px-4">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">Jhanjharpur</div>
              <div className="text-red-100 text-sm font-medium">Bihar</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-heading font-bold text-white mb-1">100%</div>
              <div className="text-red-100 text-sm font-medium">Free to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">How Gharbanoo Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Three simple steps to get your home construction or repair work done.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">1. Search</h3>
              <p className="text-gray-600">Find verified service providers in your area based on your needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">2. Compare</h3>
              <p className="text-gray-600">View their experience, service type, and choose the best fit.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">3. Connect</h3>
              <p className="text-gray-600">Call or WhatsApp them directly for free. No hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to build and maintain your dream home.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'house-plans', icon: PenTool, color: 'text-primary', bg: 'bg-red-50', en: 'House Plans', hi: 'घर का नक्शा', link: '/house-plans' },
              { id: 'contractor', icon: HardHat, color: 'text-gray-600', bg: 'bg-gray-100', en: 'Contractor', hi: 'कांट्रेक्टर' },
              { id: 'plumber', icon: Droplet, color: 'text-blue-500', bg: 'bg-blue-50', en: 'Plumber', hi: 'प्लंबर' },
              { id: 'electrician', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', en: 'Electrician', hi: 'बिजली मिस्त्री' },
              { id: 'carpenter', icon: Hammer, color: 'text-orange-500', bg: 'bg-orange-50', en: 'Carpenter', hi: 'बढ़ई' },
              { id: 'painter', icon: Paintbrush, color: 'text-purple-500', bg: 'bg-purple-50', en: 'Painter', hi: 'पेंटर' },
            ].map((service) => (
              <Link 
                key={service.id} 
                to={service.link || `/find-services?category=${service.en}`}
                className="group flex items-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900">{service.en}</h3>
                  <p className="text-sm text-gray-500 mb-1">{service.hi}</p>
                  <span className="text-sm text-primary font-medium group-hover:underline">View Providers &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* House Plan Preview */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get Your Dream House Plan</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Professional 2D and 3D house plans designed by experienced civil engineers. Get the perfect layout for your plot before you start building.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="text-gray-300">Starting from ₹3/sq ft for 2D plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="text-gray-300">Fast delivery within 3-5 days</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="text-gray-300">Site visit available in Jhanjharpur</span>
                </li>
              </ul>
              <Link
                to="/house-plans"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-gray-900 bg-accent hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Call Now to Get Started
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600&h=800" alt="2D Floor Plan" className="rounded-xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=800" alt="3D House Elevation" className="rounded-xl object-cover h-64 w-full mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from home owners in Jhanjharpur who used Gharbanoo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ramesh Yadav', location: 'RS Bazar, Jhanjharpur', text: 'Found a great electrician within 10 minutes. He came and fixed the wiring issue the same day. Very helpful platform for our town.' },
              { name: 'Sunita Devi', location: 'Lohna Road', text: 'Got my house plan made through Gharbanoo. The engineer was very professional and gave us a modern 3D design that fit our budget perfectly.' },
              { name: 'Vikash Jha', location: 'Jhanjharpur RS', text: 'I needed a painter for Diwali. Instead of asking around, I just checked Gharbanoo and called Promod. Good work and no commission involved.' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gharbanoo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800&h=600" alt="Construction Worker" className="rounded-2xl shadow-xl object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Why Choose Gharbanoo?</h2>
              <div className="space-y-6">
                {[
                  { title: 'No middleman', desc: 'Connect directly with workers. We don\'t take any commission from you or the provider.' },
                  { title: 'Verified local providers', desc: 'All providers are from Jhanjharpur and surrounding areas, verified by our team.' },
                  { title: 'Free to use', desc: 'Home owners pay absolutely nothing to use our platform to find workers.' },
                  { title: 'Jhanjharpur\'s first', desc: 'The first dedicated home services platform built specifically for our town.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-red-100 mb-10">Find trusted workers in Jhanjharpur today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/find-services"
              className="w-full sm:w-auto px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Find Providers
            </Link>
            <a
              href="https://wa.me/919241562747"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-base font-medium rounded-full text-white hover:bg-primary-dark transition-colors"
            >
              WhatsApp: 9241562747
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
