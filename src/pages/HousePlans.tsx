import React, { useState } from 'react';
import { Check, PenTool, Home, HardHat, Loader2 } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function HousePlans() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    length: '',
    width: '',
    floors: '',
    bedrooms: '',
    budget: '',
    planType: '2D',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { requireAuth } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    requireAuth(async () => {
      setIsLoading(true);
      setError('');
      try {
        await addDoc(collection(db, 'house_plan_requests'), {
          full_name: formData.name,
          phone: formData.phone,
          plot_length: formData.length,
          plot_width: formData.width,
          floors: formData.floors,
          bedrooms: formData.bedrooms,
          budget: formData.budget,
          plan_type: formData.planType,
          requirements: formData.requirements,
          timestamp: serverTimestamp(),
          authorUid: auth.currentUser?.uid
        });
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          length: '',
          width: '',
          floors: '',
          bedrooms: '',
          budget: '',
          planType: '2D',
          requirements: ''
        });
      } catch (err: any) {
        console.error('Error submitting request:', err);
        setError('Failed to submit request. Please try again.');
      } finally {
        setIsLoading(false);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional House Plans for Jhanjharpur</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            2D & 3D house plans by experienced civil engineers. Affordable pricing, fast delivery.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2D Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-primary mb-6">
              <PenTool className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">2D House Plan</h3>
            <div className="text-3xl font-bold text-primary mb-4">₹3 <span className="text-base font-normal text-gray-500">/ sq ft</span></div>
            <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">Example: 1000 sq ft = ₹3,000 only</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Floor plan & room layout</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Accurate dimensions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Delivery: 48-72 hours</span>
              </li>
            </ul>
            <a href="#request-form" className="w-full block text-center px-6 py-3 border border-primary text-primary font-medium rounded-xl hover:bg-red-50 transition-colors">
              Get 2D Plan
            </a>
          </div>

          {/* 3D Plan */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Popular
            </div>
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-primary mb-6">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">3D House Plan</h3>
            <div className="text-3xl font-bold text-primary mb-4">₹5 <span className="text-base font-normal text-gray-500">/ sq ft</span></div>
            <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">Example: 1000 sq ft = ₹5,000 only</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 font-medium">Everything in 2D Plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">3D visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Elevation view</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Delivery: 3-5 days</span>
              </li>
            </ul>
            <a href="#request-form" className="w-full block text-center px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors shadow-md">
              Get 3D Plan
            </a>
          </div>

          {/* Site Visit */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 mb-6">
              <HardHat className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Site Visit</h3>
            <div className="text-xl font-bold text-gray-900 mb-4">As per engineer's fee</div>
            <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">Physical inspection in Jhanjharpur</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Physical plot inspection</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Soil testing advice</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-600">Construction guidance</span>
              </li>
            </ul>
            <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Share Details', desc: 'Fill the form with your plot size and requirements.' },
              { step: '2', title: 'Get Quote', desc: 'We will call you to confirm details and give a final price.' },
              { step: '3', title: 'Make Payment', desc: 'Pay a small advance to start the design process.' },
              { step: '4', title: 'Receive Plan', desc: 'Get your professional house plan on WhatsApp/Email.' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>}
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Plans */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Sample 2D Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 1" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 2" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600&h=400" alt="2D Plan 3" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Sample 3D Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 1" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 2" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" alt="3D Plan 3" className="rounded-xl shadow-sm border border-gray-200 object-cover w-full h-64" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-primary px-8 py-6 text-white text-center">
              <h2 className="text-2xl font-heading font-bold">Request Your House Plan</h2>
              <p className="text-red-100 mt-2">Fill the details below and we'll get back to you with a quote.</p>
            </div>
            
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600 mb-6">We will contact you within 24 hours.</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors">
                    WhatsApp us at 9241562747 for faster response
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="10-digit mobile number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Plot Length (feet)</label>
                      <input type="number" name="length" value={formData.length} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. 50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Plot Width (feet)</label>
                      <input type="number" name="width" value={formData.width} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. 30" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Floors</label>
                      <select name="floors" value={formData.floors} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                        <option value="">Select</option>
                        <option value="1">1 (Ground only)</option>
                        <option value="2">2 (G+1)</option>
                        <option value="3">3 (G+2)</option>
                        <option value="4+">4 or more</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                      <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                        <option value="">Select</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4+">4+ BHK</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Plan Type</label>
                      <select name="planType" value={formData.planType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                        <option value="2D">2D Plan Only</option>
                        <option value="3D">3D Plan Only</option>
                        <option value="Both">Both 2D & 3D</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Budget (₹)</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. 15 Lakhs" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                    <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Any specific needs like pooja room, parking space, etc."></textarea>
                  </div>

                  <button type="submit" disabled={isLoading} className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-md text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
