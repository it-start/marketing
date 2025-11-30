import React from 'react';
import { Bot, Globe, Smartphone, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context';

const Docs: React.FC = () => {
  const { t } = useAppContext();

  const steps = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: t('docs.step1.title'),
      desc: t('docs.step1.desc')
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: t('docs.step2.title'),
      desc: t('docs.step2.desc')
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: t('docs.step3.title'),
      desc: t('docs.step3.desc'),
      note: t('docs.step3.note')
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: t('docs.step4.title'),
      desc: t('docs.step4.desc')
    }
  ];

  return (
    <div className="flex flex-col pb-24 space-y-8 animate-fadeIn">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t('docs.title')}
        </h2>
        <p className="text-slate-600 dark:text-gray-400">
          {t('docs.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white dark:bg-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-4 items-start shadow-sm">
            <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {step.desc}
              </p>
              {step.note && (
                <div className="text-xs bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-3 py-2 rounded-lg border border-yellow-200 dark:border-yellow-700/50">
                  {step.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;