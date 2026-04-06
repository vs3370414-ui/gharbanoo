import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Phone, MessageCircle, MapPin, Star } from 'lucide-react';
import { providers, ServiceType } from '../data/providers';
import { useAuth } from '../components/AuthProvider';

export function FindServices() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ServiceType | 'All' || 'All';
  
  const [activeTab, setActiveTab] = useState<ServiceType | 'All'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const { requireAuth } = useAuth();

  const categories: (ServiceType | 'All')[] = ['All', 'Plumber', 'Electrician', 'Carpenter', 'Painter', 'Contractor'];

  const filteredProviders = useMemo(() => {
    return providers.filter(provider => {
      const matchesTab = activeTab === 'All' || provider.service === activeTab;
      const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            provider.service.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getServiceColor = (service: ServiceType) => {
    switch(service) {
      case 'Plumber': return 'bg-blue-100 text-blue-800';
      case 'Electrician': return 'bg-yellow-100 text-yellow-800';
      case 'Carpenter': return 'bg-orange-100 text-orange-800';
      case 'Painter': return 'bg-purple-100 text-purple-800';
      case 'Contractor': return 'bg-gray-200 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleCall = (phone: string) => {
    requireAuth(() => {
      window.location.href = `tel:+91${phone}`;
    });
  };

  const handleWhatsApp = (phone: string) => {
    requireAuth(() => {
      window.open(`https://wa.me/91${phone}`, '_blank');
    });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Find Service Providers in Jhanjharpur</h1>
          <p className="text-lg text-gray-600 mb-8">25+ verified local providers ready to help</p>
          
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow shadow-sm"
              placeholder="Search by name or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveTab(category);
                  setSearchParams(category === 'All' ? {} : { category });
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-accent text-gray-900 py-3 px-4 text-center font-medium shadow-sm">
        📍 Currently available in Jhanjharpur, Bihar only. We are expanding soon!
      </div>

      {/* Provider Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">No providers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map((provider) => (
              <div key={provider.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold ${getAvatarColor(provider.name)}`}>
                      {provider.name.charAt(0)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getServiceColor(provider.service)}`}>
                      {provider.service}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-1 line-clamp-1">{provider.name}</h3>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-accent mr-2 fill-current" />
                      <span>{provider.experience} Years Experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Jhanjharpur, Bihar</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleCall(provider.phone)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-colors w-full"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                  <button
                    onClick={() => handleWhatsApp(provider.phone)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-xl hover:bg-green-600 transition-colors w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">Are you a service provider in Jhanjharpur?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join Gharbanoo for free and get more customers directly to your phone.</p>
          <a
            href="/join-provider"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-md"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
