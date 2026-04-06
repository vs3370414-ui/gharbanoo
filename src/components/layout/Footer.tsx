import { Link } from 'react-router-dom';
import { Heart, Home, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white">
                <Home className="w-6 h-6" />
                <Heart className="w-3 h-3 absolute bottom-2 right-2 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">Gharbanoo</span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Ghar Ka Pehla Kadam</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Connecting home owners directly with verified plumbers, electricians, carpenters, painters and contractors. No middleman. No commission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/house-plans" className="text-sm hover:text-primary transition-colors">House Plans</Link></li>
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Find Services</Link></li>
              <li><Link to="/join-provider" className="text-sm hover:text-primary transition-colors">Join as Provider</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Plumbers</Link></li>
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Electricians</Link></li>
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Carpenters</Link></li>
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Painters</Link></li>
              <li><Link to="/find-services" className="text-sm hover:text-primary transition-colors">Contractors</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Currently serving Jhanjharpur, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                  WhatsApp: 9241562747
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:gharbanoo@gmail.com" className="text-sm hover:text-primary transition-colors">
                  gharbanoo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Gharbanoo | Founder: Sushant Shivam
          </p>
          <div className="text-sm text-gray-500">
            Made with <Heart className="w-4 h-4 inline text-primary mx-1" /> for Bihar
          </div>
        </div>
      </div>
    </footer>
  );
}
