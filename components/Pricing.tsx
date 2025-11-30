import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const Pricing: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const tiers: PricingTier[] = [
    {
      id: 'consult',
      name: 'Consultation',
      price: '$150',
      features: [
        '1-Hour Video Call',
        'Account Audit',
        'Strategy Roadmap',
        'Q&A Session'
      ]
    },
    {
      id: 'setup',
      name: 'Ad Setup',
      price: '$800',
      features: [
        'Campaign Structure',
        'Keyword Research',
        'Creative Design (3 sets)',
        'Tracking Setup',
        '1 Month Support'
      ],
      recommended: true
    },
    {
      id: 'full',
      name: 'Full Management',
      price: '$1,500/mo',
      features: [
        'Weekly Optimization',
        'A/B Testing',
        'Bi-Weekly Reporting',
        'Unlimited Creatives',
        '24/7 Priority Support'
      ]
    }
  ];

  return (
    <div className="flex flex-col pb-24 space-y-6">
       <div className="text-center space-y-2 mb-4">
        <h2 className="text-3xl font-bold text-white">
          Simple Pricing
        </h2>
        <p className="text-gray-400">
          Transparent rates. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative p-6 rounded-2xl flex flex-col ${
              tier.recommended 
                ? 'bg-gradient-to-b from-primary/20 to-card border border-primary/50 shadow-lg shadow-primary/10' 
                : 'bg-card border border-white/5'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">{tier.name}</h3>
            <div className="text-3xl font-bold text-white mb-6">{tier.price}</div>
            
            <ul className="flex-1 space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={onContactClick}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                tier.recommended 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;