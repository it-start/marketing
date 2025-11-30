import React, { useState } from 'react';
import { Send, Calendar, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSent(true);
      setForm({ name: '', contact: '', message: '' });
    }, 1000);
  };

  return (
    <div className="flex flex-col pb-24 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
        <p className="text-gray-400">Schedule a call or drop me a message.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info / Calendar Placeholder */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-2xl border border-white/5 space-y-4">
             <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>alex@marketing.pro</span>
             </div>
             <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>@alex_telegram</span>
             </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Remote / Worldwide</span>
             </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-2xl border border-indigo-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-white" />
              <h3 className="text-lg font-bold text-white">Schedule a Call</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Book a free 15-minute discovery call to discuss your project needs.
            </p>
            <button className="w-full bg-white text-indigo-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Open Calendar
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-6 rounded-2xl border border-white/5">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Send className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setSent(false)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-dark/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Telegram or Email</label>
                <input 
                  type="text" 
                  required
                  value={form.contact}
                  onChange={(e) => setForm({...form, contact: e.target.value})}
                  className="w-full bg-dark/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="@username or email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-dark/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  placeholder="Tell me about your goals..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;