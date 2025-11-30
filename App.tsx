import React, { useState } from 'react';
import { Layout, Briefcase, Zap, DollarSign, User, Menu, X } from 'lucide-react';
import Expertise from './components/Expertise';
import ImageEditor from './components/ImageEditor';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: AppSection.HOME, label: 'Home', icon: <Layout className="w-5 h-5" /> },
    { id: AppSection.EXPERTISE, label: 'Expertise', icon: <Briefcase className="w-5 h-5" /> },
    { id: AppSection.AI_STUDIO, label: 'AI Studio', icon: <Zap className="w-5 h-5" /> },
    { id: AppSection.PRICING, label: 'Pricing', icon: <DollarSign className="w-5 h-5" /> },
    { id: AppSection.CONTACT, label: 'Contact', icon: <User className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.HOME:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fadeIn pb-24">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75"></div>
              <div className="relative w-24 h-24 bg-card rounded-full flex items-center justify-center border-2 border-white/10 overflow-hidden">
                 <img src="https://picsum.photos/200/200" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-2 max-w-md">
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
                Alex Marketing<span className="text-primary">.</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Driving growth through Yandex Direct, Telegram Ads, and Marketing Quizzes.
              </p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveSection(AppSection.CONTACT)}
                className="px-6 py-3 bg-white text-dark font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Hire Me
              </button>
              <button 
                onClick={() => setActiveSection(AppSection.AI_STUDIO)}
                className="px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 flex items-center space-x-2"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Try AI Tool</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-sm">
                <div className="p-3 bg-card rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-gray-400">Clients</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-secondary">300%</div>
                    <div className="text-xs text-gray-400">Avg ROI</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-emerald-400">5y</div>
                    <div className="text-xs text-gray-400">Exp</div>
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
    <div className="min-h-screen bg-dark text-white selection:bg-primary/30 font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5 p-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">Alex<span className="text-primary">.</span></div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300">
           {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark pt-20 px-6 space-y-4 lg:hidden animate-slideIn">
           {navItems.map(item => (
             <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left p-4 rounded-xl text-lg font-medium border border-white/5 flex items-center space-x-4 ${
                  activeSection === item.id ? 'bg-primary/20 text-white border-primary/50' : 'text-gray-400'
                }`}
             >
               {item.icon}
               <span>{item.label}</span>
             </button>
           ))}
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 pt-20 lg:pt-10 min-h-screen relative">
         {/* Main Content Area */}
         {renderContent()}
      </main>

      {/* Bottom Navigation (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-lg border-t border-white/5 lg:border-none lg:bg-transparent lg:static lg:flex lg:justify-center lg:mt-10 lg:pb-10">
        <nav className="flex justify-around items-center max-w-lg mx-auto p-2 lg:bg-card/50 lg:rounded-full lg:border lg:border-white/10 lg:px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 lg:flex-row lg:space-x-2 ${
                activeSection === item.id 
                  ? 'text-primary scale-110' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {item.icon}
              <span className={`text-[10px] mt-1 font-medium lg:text-sm lg:mt-0 ${activeSection === item.id ? 'block' : 'hidden lg:block'}`}>
                {item.label}
              </span>
              {/* Active Indicator Dot */}
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

export default App;