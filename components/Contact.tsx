import React, { useState } from 'react';
import { Send, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useAppContext } from '../context';

const Contact: React.FC = () => {
  const { t } = useAppContext();
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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('contact.title')}</h2>
        <p className="text-slate-600 dark:text-gray-400">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info / Calendar Placeholder */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 space-y-4 shadow-sm">
             <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>{t('contact.email')}</span>
             </div>
             <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>{t('contact.tg')}</span>
             </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t('contact.location')}</span>
             </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900/50 dark:to-purple-900/50 p-6 rounded-2xl border border-indigo-500/30 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-white" />
              <h3 className="text-lg font-bold">{t('contact.schedule.title')}</h3>
            </div>
            <p className="text-indigo-100 dark:text-gray-300 text-sm mb-4">
              {t('contact.schedule.desc')}
            </p>
            <button className="w-full bg-white text-indigo-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
              {t('contact.schedule.btn')}
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Send className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('contact.sent.title')}</h3>
              <p className="text-slate-600 dark:text-gray-400">{t('contact.sent.desc')}</p>
              <button 
                onClick={() => setSent(false)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                {t('contact.sent.another')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">{t('contact.form.contact')}</label>
                <input 
                  type="text" 
                  required
                  value={form.contact}
                  onChange={(e) => setForm({...form, contact: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">{t('contact.form.details')}</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
                  placeholder="..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>{t('contact.form.send')}</span>
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