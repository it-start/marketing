import React from 'react';
import { Target, MessageCircle, BarChart3, CheckCircle2 } from 'lucide-react';

const Expertise: React.FC = () => {
  const services = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Yandex Direct",
      description: "High-ROI context advertising campaigns tailored for your niche. I optimize for conversions, not just clicks.",
      tags: ["Search", "RSYA", "Retargeting"]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-sky-400" />,
      title: "Telegram Ads",
      description: "Official Telegram advertising platform expertise. Precise targeting to reach your audience directly in their favorite channels.",
      tags: ["Channel Growth", "B2B", "Official Ads Platform"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Marketing Quizzes",
      description: "Interactive funnels that qualify leads automatically. Higher engagement rates and lower CPL compared to traditional landing pages.",
      tags: ["Marquiz", "Lead Gen", "Segmentation"]
    }
  ];

  return (
    <div className="flex flex-col space-y-6 pb-24">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          My Expertise
        </h2>
        <p className="text-gray-400">
          Data-driven strategies to grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:bg-card/80 group">
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 font-medium border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-2xl border border-white/10">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
          Why work with me?
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span> 5+ Years in Digital Marketing
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span> Over $1M Ad Budget Managed
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span> Transparent Reporting & Analytics
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;