import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Check, HelpCircle, Loader2 } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(collection(db, 'contact_messages'), {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        timestamp: serverTimestamp()
      });
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    } catch (err: any) {
      console.error('Error submitting message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      q: "Is Gharbanoo free to use?",
      a: "Yes, Gharbanoo is 100% free for home owners. We do not charge any commission or fees to connect you with service providers."
    },
    {
      q: "How do I book a service?",
      a: "Simply browse the 'Find Services' page, choose a provider, and click the Call or WhatsApp button to contact them directly. You negotiate the price and terms with them."
    },
    {
      q: "Are the providers verified?",
      a: "Yes, our team personally verifies the identity and basic experience of the providers listed on our platform before they go live."
    },
    {
      q: "Do you provide materials for construction?",
      a: "Currently, we only connect you with service providers (labor/contractors) and offer house plan designs. We do not supply construction materials."
    },
    {
      q: "Is Gharbanoo available outside Jhanjharpur?",
      a: "At this moment, we are exclusively serving Jhanjharpur and its immediate surrounding areas in Bihar. We plan to expand to other cities soon."
    }
  ];

  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Have a question or need help? We're always here for you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">WhatsApp (Primary)</h3>
                  <p className="text-gray-600 mb-2">Fastest way to reach us for any query.</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-lg">
                    +91 92415 62747
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-2">For house plans or provider registration.</p>
                  <a href="tel:+919241562747" className="text-primary font-medium hover:underline text-lg">
                    +91 92415 62747
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-lg">
                    Jhanjharpur, Bihar, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Specific Enquiries</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span>For House Plans:</span>
                  <a href="https://wa.me/919241562747" className="text-primary font-medium">WhatsApp Us</a>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span>For Provider Registration:</span>
                  <a href="https://wa.me/919241562747" className="text-primary font-medium">WhatsApp Us</a>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span>General Support:</span>
                  <a href="https://wa.me/919241562747" className="text-primary font-medium">WhatsApp Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                  <a href="https://wa.me/919241562747" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors mb-4">
                    WhatsApp us at 9241562747
                  </a>
                  <div className="mt-2">
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="10-digit mobile number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" disabled={isLoading} className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-md text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
