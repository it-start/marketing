import React from 'react';
import { Target, MessageCircle, BarChart3, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context';

const Expertise: React.FC = () => {
  const { t } = useAppContext();

  const services = [
    {
      icon: <Target className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: t('service.yandex.title'),
      description: t('service.yandex.desc'),
      tags: ["Search", "RSYA", "Retargeting"]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: t('service.telegram.title'),
      description: t('service.telegram.desc'),
      tags: ["Channel Growth", "B2B", "Official Ads"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500 dark:text-green-400" />,
      title: t('service.quiz.title'),
      description: t('service.quiz.desc'),
      tags: ["Marquiz", "Lead Gen", "Segmentation"]
    }
  ];

  const whyItems = [
    t('expertise.why.1'),
    t('expertise.why.2'),
    t('expertise.why.3')
  ];

  return (
    <div className="flex flex-col space-y-6 pb-24">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
          {t('expertise.title')}
        </h2>
        <p className="text-slate-600 dark:text-gray-400">
          {t('expertise.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white dark:bg-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all hover:bg-slate-50 dark:hover:bg-card/80 group shadow-sm dark:shadow-none">
            <div className="mb-4 p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md text-xs text-slate-600 dark:text-gray-300 font-medium border border-slate-200 dark:border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-2xl border border-primary/20 dark:border-white/10">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
          {t('expertise.why_me')}
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-gray-300 text-sm">
          {whyItems.map((item: any, i) => (
             <li key={i} className="flex items-start">
               <span className="mr-2 text-primary">•</span> {item}
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expertise;