import React, { useState } from 'react';
import { Layout, Briefcase, Zap, DollarSign, User, Menu, X, Globe, Moon, Sun } from 'lucide-react';
import Expertise from './components/Expertise';
import ImageEditor from './components/ImageEditor';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import { AppSection } from './types';
import { AppProvider, useAppContext } from './context';

const MainApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage, theme, toggleTheme } = useAppContext();

  const navItems = [
    { id: AppSection.HOME, label: t('nav.home'), icon: <Layout className="w-5 h-5" /> },
    { id: AppSection.EXPERTISE, label: t('nav.expertise'), icon: <Briefcase className="w-5 h-5" /> },
    { id: AppSection.AI_STUDIO, label: t('nav.ai_studio'), icon: <Zap className="w-5 h-5" /> },
    { id: AppSection.PRICING, label: t('nav.pricing'), icon: <DollarSign className="w-5 h-5" /> },
    { id: AppSection.CONTACT, label: t('nav.contact'), icon: <User className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.HOME:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fadeIn pb-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-32 h-32 bg-slate-100 dark:bg-card rounded-full flex items-center justify-center border-2 border-slate-200 dark:border-white/10 overflow-hidden">
                 {/* Placeholder avatar - in a real app, this would be the user's uploaded image */}
                 <img 
                  src="https://picsum.photos/300/300?grayscale" 
                  alt="Andrey M. Avatar" 
                  className="w-full h-full object-cover" 
                 />
              </div>
            </div>
            
            <div className="space-y-2 max-w-md">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t('home.title.prefix')}<span className="text-primary">{t('home.title.suffix')}</span>
              </h1>
              <p className="text-slate-600 dark:text-gray-400 text-lg">
                {t('home.subtitle')}
              </p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveSection(AppSection.CONTACT)}
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-dark font-bold rounded-full hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t('home.hire_me')}
              </button>
              <button 
                onClick={() => setActiveSection(AppSection.AI_STUDIO)}
                className="px-6 py-3 bg-white/50 dark:bg-white/10 text-slate-900 dark:text-white font-bold rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-colors backdrop-blur-sm border border-slate-200 dark:border-white/10 flex items-center space-x-2 shadow-sm"
              >
                <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                <span>{t('home.try_ai')}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-sm">
                <div className="p-3 bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">{t('home.stats.clients')}</div>
                </div>
                <div className="p-3 bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <div className="text-2xl font-bold text-secondary">300%</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">{t('home.stats.roi')}</div>
                </div>
                <div className="p-3 bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <div className="text-2xl font-bold text-emerald-500 dark:text-emerald-400">5+</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">{t('home.stats.exp')}</div>
                </div>
            </div>
          </div>
        );
      case AppSection.EXPERTISE:
        return <Expertise />;
      case AppSection.AI_STUDIO:
        return <ImageEditor />;
      case AppSection.PRICING:
        return <Pricing onContactClick={() => setActiveSection(AppSection.CONTACT)} />;
      case AppSection.CONTACT:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/30 font-sans transition-colors duration-300">
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 p-4 flex justify-between items-center transition-colors duration-300">
        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          Andrey<span className="text-primary">M.</span>
        </div>
        
        <div className="flex items-center space-x-2">
           {/* Language Toggle */}
           <button 
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 flex items-center space-x-1 font-medium text-sm transition-colors"
           >
             <Globe className="w-4 h-4" />
             <span>{language.toUpperCase()}</span>
           </button>

           {/* Theme Toggle */}
           <button 
             onClick={toggleTheme}
             className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 transition-colors"
           >
             {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
           </button>

           {/* Mobile Menu Toggle */}
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-gray-300 lg:hidden">
              {isMenuOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-dark pt-20 px-6 space-y-4 lg:hidden animate-slideIn transition-colors duration-300">
           {navItems.map(item => (
             <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left p-4 rounded-xl text-lg font-medium border border-slate-200 dark:border-white/5 flex items-center space-x-4 transition-colors ${
                  activeSection === item.id 
                    ? 'bg-primary/10 text-primary border-primary/50' 
                    : 'text-slate-600 dark:text-gray-400 bg-slate-50 dark:bg-white/5'
                }`}
             >
               {item.icon}
               <span>{item.label}</span>
             </button>
           ))}
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 pt-24 lg:pt-28 min-h-screen relative">
         {renderContent()}
      </main>

      {/* Bottom Navigation (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/5 lg:border-none lg:bg-transparent lg:static lg:flex lg:justify-center lg:mt-10 lg:pb-10 transition-colors duration-300">
        <nav className="flex justify-around items-center max-w-lg mx-auto p-2 lg:bg-white/80 dark:lg:bg-card/50 lg:rounded-full lg:border lg:border-slate-200 dark:lg:border-white/10 lg:px-6 lg:shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 lg:flex-row lg:space-x-2 ${
                activeSection === item.id 
                  ? 'text-primary scale-110 lg:bg-primary/10' 
                  : 'text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300'
              }`}
            >
              {item.icon}
              <span className={`text-[10px] mt-1 font-medium lg:text-sm lg:mt-0 ${activeSection === item.id ? 'block' : 'hidden lg:block'}`}>
                {item.label}
              </span>
              {/* Active Indicator Dot (Mobile) */}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full lg:hidden" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <MainApp />
  </AppProvider>
);

export default App;