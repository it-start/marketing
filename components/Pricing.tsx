import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import { useAppContext } from '../context';

const Pricing: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const { t } = useAppContext();

  const tiers: PricingTier[] = [
    {
      id: 'consult',
      name: t('pricing.tier.consult'),
      price: '$150',
      features: t('pricing.feat.consult') as string[]
    },
    {
      id: 'setup',
      name: t('pricing.tier.setup'),
      price: '$800',
      features: t('pricing.feat.setup') as string[],
      recommended: true
    },
    {
      id: 'full',
      name: t('pricing.tier.full'),
      price: '$1,500/mo',
      features: t('pricing.feat.full') as string[]
    }
  ];

  return (
    <div className="flex flex-col pb-24 space-y-6">
       <div className="text-center space-y-2 mb-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t('pricing.title')}
        </h2>
        <p className="text-slate-600 dark:text-gray-400">
          {t('pricing.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative p-6 rounded-2xl flex flex-col transition-all ${
              tier.recommended 
                ? 'bg-gradient-to-b from-primary/10 to-white dark:to-card border border-primary/50 shadow-xl shadow-primary/10 scale-105 z-10' 
                : 'bg-white dark:bg-card border border-slate-200 dark:border-white/5 shadow-sm'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {t('pricing.most_popular')}
              </div>
            )}
            
            <h3 className="text-lg font-medium text-slate-600 dark:text-gray-300 mb-2">{tier.name}</h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{tier.price}</div>
            
            <ul className="flex-1 space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-gray-400">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={onContactClick}
              className={`w-full py-3 rounded-lg font-medium transition-all shadow-sm ${
                tier.recommended 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
              }`}
            >
              {t('pricing.start')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;