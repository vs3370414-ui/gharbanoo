import { Target, Eye, Heart, ShieldCheck, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">About Gharbanoo</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are building the first step of every home owner's construction journey in tier 2 and tier 3 cities of India.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="mb-6">
              Gharbanoo was born from a simple observation in Jhanjharpur, Bihar. When home owners needed a reliable plumber, electrician or carpenter, they had no way to find or verify them. And when skilled workers needed customers, they had no way to show their work.
            </p>
            <p className="mb-6">
              After months of ground research — talking to home owners, service providers and material shop owners across Jhanjharpur and Madhubani — Sushant Shivam founded Gharbanoo with one mission: to be the first step in every home owner's construction journey.
            </p>
            <p className="font-medium text-gray-900 text-xl border-l-4 border-primary pl-6 py-2 my-10 bg-gray-50 rounded-r-lg">
              Today Gharbanoo connects home owners directly with 25+ verified local service providers in Jhanjharpur. No middleman. No commission. Just trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To make home construction simple, transparent and affordable for every Indian family.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become India's most trusted home construction platform for tier 2 and tier 3 cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Sushant Shivam" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-3/5 p-10 flex flex-col justify-center">
              <div className="uppercase tracking-wider text-sm font-bold text-primary mb-2">Founder</div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Sushant Shivam</h3>
              <p className="text-gray-500 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Based in Jhanjharpur, Bihar
              </p>
              <p className="text-lg text-gray-600 italic mb-8">
                "First generation entrepreneur from Bihar with deep roots in the Jhanjharpur community. I built Gharbanoo to solve a problem I saw my own family face during construction."
              </p>
              <a 
                href="https://wa.me/919241562747" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Connect on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Community First', desc: 'Built by locals, for locals. We understand the specific needs of our town.' },
              { icon: ShieldCheck, title: 'Verified Trust', desc: 'Every provider is personally verified before they are listed on our platform.' },
              { icon: Zap, title: 'Zero Commission', desc: 'We don\'t take a cut from your hard-earned money. It\'s a free connection.' },
              { icon: Users, title: 'Direct Contact', desc: 'No hiding numbers. You talk directly to the person who will do the job.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            We are an early stage startup currently serving Jhanjharpur, Bihar. We are bootstrapped, community driven and growing organically.
          </p>
        </div>
      </section>
    </div>
  );
}
