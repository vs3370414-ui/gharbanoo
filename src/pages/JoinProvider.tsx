import React, { useState } from 'react';
import { Check, TrendingUp, Users, Smartphone, Briefcase, Loader2 } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function JoinProvider() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    serviceType: '',
    experience: '',
    area: '',
    about: ''
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
        await addDoc(collection(db, 'provider_registrations'), {
          full_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.whatsapp || formData.phone,
          service_type: formData.serviceType,
          experience: formData.experience,
          area: formData.area,
          about: formData.about,
          timestamp: serverTimestamp(),
          authorUid: auth.currentUser?.uid
        });
        
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          whatsapp: '',
          serviceType: '',
          experience: '',
          area: '',
          about: ''
        });
      } catch (err: any) {
        console.error('Error submitting registration:', err);
        setError('Failed to submit registration. Please try again.');
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
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Join as Provider</h1>
          <h2 className="text-2xl md:text-3xl font-heading mb-6 text-red-100">सर्विस प्रोवाइडर बनें</h2>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Grow Your Business with Gharbanoo
          </p>
          <p className="text-lg text-red-100 max-w-2xl mx-auto mt-1">
            घरबनू के साथ अपना काम बढ़ाएं
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, titleEn: 'Free Listing', titleHi: 'मुफ्त लिस्टिंग', descEn: 'No monthly fee, no commission', descHi: 'कोई मासिक शुल्क नहीं, कोई कमीशन नहीं' },
            { icon: Smartphone, titleEn: 'Direct Customers', titleHi: 'सीधे ग्राहक', descEn: 'Customers call you directly', descHi: 'ग्राहक सीधे आपको कॉल करेंगे' },
            { icon: Users, titleEn: 'Digital Portfolio', titleHi: 'डिजिटल पोर्टफोलियो', descEn: 'Show your best work online', descHi: 'अपना काम ऑनलाइन दिखाएं' },
            { icon: TrendingUp, titleEn: 'More Work', titleHi: 'ज्यादा काम', descEn: 'Get regular enquiries', descHi: 'नियमित enquiries पाएं' },
          ].map((benefit, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center flex flex-col h-full">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="text-[16px] font-heading font-bold text-gray-900">{benefit.titleEn}</h3>
                <h4 className="text-[14px] text-gray-500 mb-2">{benefit.titleHi}</h4>
                <p className="text-[16px] font-medium text-gray-800">{benefit.descEn}</p>
                <p className="text-[14px] text-gray-500">{benefit.descHi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">How It Works for Providers</h2>
            <h3 className="text-xl text-gray-500">प्रोवाइडर्स के लिए यह कैसे काम करता है</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', titleEn: 'Register', titleHi: 'रजिस्टर करें', descEn: 'Fill simple form', descHi: 'आसान फॉर्म भरें' },
              { step: '2', titleEn: 'Get Listed', titleHi: 'लिस्ट हों', descEn: 'We verify and list you free', descHi: 'हम मुफ्त में verify करके list करेंगे' },
              { step: '3', titleEn: 'Get Customers', titleHi: 'ग्राहक पाएं', descEn: 'Customers call you directly', descHi: 'ग्राहक सीधे call करेंगे' },
            ].map((item, i) => (
              <div key={i} className="text-center relative flex flex-col h-full">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 shadow-sm shrink-0">
                  {item.step}
                </div>
                {i < 2 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>}
                <div className="flex-grow">
                  <h3 className="text-[16px] font-heading font-bold text-gray-900">{item.titleEn}</h3>
                  <h4 className="text-[14px] text-gray-500 mb-2">{item.titleHi}</h4>
                  <p className="text-[16px] font-medium text-gray-800">{item.descEn}</p>
                  <p className="text-[14px] text-gray-500">{item.descHi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 px-8 py-6 text-white text-center">
            <h2 className="text-2xl font-heading font-bold">Register as a Service Provider</h2>
            <h3 className="text-lg text-gray-400 mt-1">सर्विस प्रोवाइडर के रूप में रजिस्टर करें</h3>
          </div>
          
          <div className="p-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">Registration Successful!</h3>
                <h4 className="text-lg text-gray-500 mb-4">रजिस्ट्रेशन सफल!</h4>
                
                <p className="text-gray-900 font-medium text-lg">Welcome to Gharbanoo {formData.name}!</p>
                <p className="text-gray-600 mb-6">घरबनू में आपका स्वागत है {formData.name}!</p>
                
                <p className="text-gray-900 font-medium">Sushant will contact you within 24 hours</p>
                <p className="text-gray-600 mb-8">सुशांत 24 घंटे में आपसे WhatsApp पर संपर्क करेंगे</p>
                
                <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center justify-center px-8 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                  <span className="font-bold text-[16px]">Chat on WhatsApp</span>
                  <span className="text-[14px]">WhatsApp पर बात करें</span>
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
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">Full Name *</span>
                      <span className="block text-[14px] text-gray-500">पूरा नाम *</span>
                    </label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="Enter your full name / अपना पूरा नाम लिखें" />
                  </div>
                  <div>
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">Service Type *</span>
                      <span className="block text-[14px] text-gray-500">काम का प्रकार *</span>
                    </label>
                    <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-gray-700">
                      <option value="">Select your service / अपना काम चुनें</option>
                      <option value="Plumber">Plumber / प्लंबर</option>
                      <option value="Electrician">Electrician / बिजली मिस्त्री</option>
                      <option value="Carpenter">Carpenter / बढ़ई</option>
                      <option value="Painter">Painter / पेंटर</option>
                      <option value="Contractor">Contractor / कांट्रेक्टर</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">Phone Number *</span>
                      <span className="block text-[14px] text-gray-500">फोन नंबर *</span>
                    </label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="Enter 10 digit number / 10 अंकों का नंबर लिखें" />
                  </div>
                  <div>
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">WhatsApp Number</span>
                      <span className="block text-[14px] text-gray-500">व्हाट्सएप नंबर</span>
                    </label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="If different from phone / फोन से अलग हो तो लिखें" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">Years of Experience</span>
                      <span className="block text-[14px] text-gray-500">अनुभव के साल</span>
                    </label>
                    <input type="number" name="experience" value={formData.experience} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="How many years? / कितने साल का अनुभव है?" />
                  </div>
                  <div>
                    <label className="block mb-1">
                      <span className="text-[16px] font-bold text-gray-900">Your Area in Jhanjharpur</span>
                      <span className="block text-[14px] text-gray-500">झंझारपुर में आपका इलाका</span>
                    </label>
                    <input type="text" name="area" value={formData.area} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-400" placeholder="Which area do you work in? / आप कहाँ काम करते हैं?" />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">
                    <span className="text-[16px] font-bold text-gray-900">About Yourself</span>
                    <span className="block text-[14px] text-gray-500">अपने बारे में</span>
                  </label>
                  <textarea name="about" value={formData.about} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder-gray-400" placeholder="Tell customers about your work and experience... / ग्राहकों को अपने काम और अनुभव के बारे में बताएं..."></textarea>
                </div>

                <button type="submit" disabled={isLoading} className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-md flex flex-col items-center justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span className="font-bold text-[16px]">Submitting...</span>
                    </div>
                  ) : (
                    <>
                      <span className="font-bold text-[16px]">Register for Free</span>
                      <span className="text-[14px] font-normal text-red-100">मुफ्त में रजिस्टर करें</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
