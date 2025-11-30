import { Language } from './types';

type TranslationKeys = {
  [key: string]: string | string[];
};

export const translations: Record<Language, TranslationKeys> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.expertise': 'Экспертиза',
    'nav.ai_studio': 'AI Студия',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',
    'nav.docs': 'Инструкция',
    
    // Home
    'home.title.prefix': 'Andrey M',
    'home.title.suffix': '. arketing',
    'home.subtitle': 'Рост бизнеса через Яндекс.Директ, Telegram Ads и Маркетинговые Квизы.',
    'home.hire_me': 'Связаться',
    'home.try_ai': 'Попробовать AI',
    'home.stats.clients': 'Клиентов',
    'home.stats.roi': 'Ср. ROI',
    'home.stats.exp': 'Опыт (лет)',
    
    // Expertise
    'expertise.title': 'Моя Экспертиза',
    'expertise.subtitle': 'Стратегии на основе данных для роста вашего бизнеса.',
    'expertise.why_me': 'Почему я?',
    'expertise.why.1': '5+ лет в Digital-маркетинге',
    'expertise.why.2': 'Более $1M в управлении бюджетом',
    'expertise.why.3': 'Прозрачная отчетность и аналитика',
    
    'service.yandex.title': 'Яндекс.Директ',
    'service.yandex.desc': 'Контекстная реклама с высоким ROI, адаптированная под вашу нишу. Оптимизация на конверсии, а не просто клики.',
    'service.telegram.title': 'Telegram Ads',
    'service.telegram.desc': 'Официальная рекламная платформа Telegram. Точный таргетинг на вашу аудиторию в их любимых каналах.',
    'service.quiz.title': 'Маркетинговые Квизы',
    'service.quiz.desc': 'Интерактивные воронки, которые автоматически квалифицируют лидов. Выше вовлеченность и ниже CPL.',

    // AI Studio
    'ai.title': 'AI Креативная Студия',
    'ai.subtitle': 'На базе Gemini 2.5 Flash',
    'ai.desc': 'Покажите силу AI в маркетинге. Загрузите изображение и опишите изменения (например, "Добавь неоновую вывеску").',
    'ai.upload': 'Загрузить изображение',
    'ai.processing': 'Обработка Gemini...',
    'ai.placeholder': 'Например: Добавь футуристичный фон...',
    'ai.error.empty': 'Пожалуйста, введите описание для редактирования.',
    'ai.download': 'Скачать результат',

    // Pricing
    'pricing.title': 'Простые Цены',
    'pricing.subtitle': 'Прозрачные тарифы. Без скрытых платежей.',
    'pricing.tier.consult': 'Консультация',
    'pricing.tier.setup': 'Настройка Рекламы',
    'pricing.tier.full': 'Ведение под ключ',
    'pricing.start': 'Начать',
    'pricing.most_popular': 'Популярное',
    
    'pricing.feat.consult': ['1 час видеозвонка', 'Аудит аккаунта', 'Дорожная карта стратегии', 'Сессия вопросов и ответов'],
    'pricing.feat.setup': ['Структура кампании', 'Сбор семантики', 'Дизайн креативов (3 шт)', 'Настройка аналитики', '1 месяц поддержки'],
    'pricing.feat.full': ['Еженедельная оптимизация', 'A/B тестирование', 'Отчетность раз в 2 недели', 'Безлимитные креативы', 'Приоритетная поддержка 24/7'],

    // Contact
    'contact.title': 'Давайте обсудим',
    'contact.subtitle': 'Запланируйте звонок или напишите мне сообщение.',
    'contact.email': 'andrey@marketing.pro',
    'contact.tg': '@andrey_telegram',
    'contact.location': 'Удаленно / Весь мир',
    'contact.schedule.title': 'Записаться на звонок',
    'contact.schedule.desc': 'Забронируйте бесплатный 15-минутный звонок для обсуждения задач.',
    'contact.schedule.btn': 'Открыть Календарь',
    'contact.form.name': 'Имя',
    'contact.form.contact': 'Telegram или Email',
    'contact.form.details': 'Детали проекта',
    'contact.form.send': 'Отправить',
    'contact.sent.title': 'Сообщение отправлено!',
    'contact.sent.desc': 'Я свяжусь с вами в течение 24 часов.',
    'contact.sent.another': 'Отправить еще',

    // Docs
    'docs.title': 'Подключение к Telegram',
    'docs.subtitle': 'Как превратить этот сайт в Mini App',
    'docs.step1.title': 'Шаг 1: BotFather',
    'docs.step1.desc': 'Откройте @BotFather в Telegram и создайте нового бота командой /newbot или выберите существующего.',
    'docs.step2.title': 'Шаг 2: Создание приложения',
    'docs.step2.desc': 'Отправьте команду /newapp боту BotFather. Следуйте инструкциям (введите название и описание).',
    'docs.step3.title': 'Шаг 3: Ссылка на приложение',
    'docs.step3.desc': 'Когда BotFather попросит "Web App URL", отправьте ссылку на этот сайт (например, https://your-domain.vercel.app).',
    'docs.step3.note': 'Важно: Сайт должен работать на HTTPS.',
    'docs.step4.title': 'Шаг 4: Готово',
    'docs.step4.desc': 'Теперь ваше приложение доступно по ссылке t.me/botname/appname или через кнопку меню, если вы настроили её через "Menu Button".',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.expertise': 'Expertise',
    'nav.ai_studio': 'AI Studio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.docs': 'Setup Guide',

    // Home
    'home.title.prefix': 'Andrey M',
    'home.title.suffix': '. arketing',
    'home.subtitle': 'Driving growth through Yandex Direct, Telegram Ads, and Marketing Quizzes.',
    'home.hire_me': 'Hire Me',
    'home.try_ai': 'Try AI Tool',
    'home.stats.clients': 'Clients',
    'home.stats.roi': 'Avg ROI',
    'home.stats.exp': 'Exp (Yrs)',

    // Expertise
    'expertise.title': 'My Expertise',
    'expertise.subtitle': 'Data-driven strategies to grow your business.',
    'expertise.why_me': 'Why work with me?',
    'expertise.why.1': '5+ Years in Digital Marketing',
    'expertise.why.2': 'Over $1M Ad Budget Managed',
    'expertise.why.3': 'Transparent Reporting & Analytics',

    'service.yandex.title': 'Yandex Direct',
    'service.yandex.desc': 'High-ROI context advertising campaigns tailored for your niche. I optimize for conversions, not just clicks.',
    'service.telegram.title': 'Telegram Ads',
    'service.telegram.desc': 'Official Telegram advertising platform expertise. Precise targeting to reach your audience directly in their favorite channels.',
    'service.quiz.title': 'Marketing Quizzes',
    'service.quiz.desc': 'Interactive funnels that qualify leads automatically. Higher engagement rates and lower CPL compared to traditional landing pages.',

    // AI Studio
    'ai.title': 'AI Creative Studio',
    'ai.subtitle': 'Powered by Gemini 2.5 Flash',
    'ai.desc': 'Showcase the power of AI in marketing. Upload an image and describe how you want to change it (e.g., "Add a neon sign").',
    'ai.upload': 'Upload Image',
    'ai.processing': 'Processing with Gemini...',
    'ai.placeholder': 'E.g., Add a futuristic background...',
    'ai.error.empty': 'Please enter a description for the edit.',
    'ai.download': 'Download Result',

    // Pricing
    'pricing.title': 'Simple Pricing',
    'pricing.subtitle': 'Transparent rates. No hidden fees.',
    'pricing.tier.consult': 'Consultation',
    'pricing.tier.setup': 'Ad Setup',
    'pricing.tier.full': 'Full Management',
    'pricing.start': 'Get Started',
    'pricing.most_popular': 'Most Popular',

    'pricing.feat.consult': ['1-Hour Video Call', 'Account Audit', 'Strategy Roadmap', 'Q&A Session'],
    'pricing.feat.setup': ['Campaign Structure', 'Keyword Research', 'Creative Design (3 sets)', 'Tracking Setup', '1 Month Support'],
    'pricing.feat.full': ['Weekly Optimization', 'A/B Testing', 'Bi-Weekly Reporting', 'Unlimited Creatives', '24/7 Priority Support'],

    // Contact
    'contact.title': "Let's Talk",
    'contact.subtitle': 'Schedule a call or drop me a message.',
    'contact.email': 'andrey@marketing.pro',
    'contact.tg': '@andrey_telegram',
    'contact.location': 'Remote / Worldwide',
    'contact.schedule.title': 'Schedule a Call',
    'contact.schedule.desc': 'Book a free 15-minute discovery call to discuss your project needs.',
    'contact.schedule.btn': 'Open Calendar',
    'contact.form.name': 'Name',
    'contact.form.contact': 'Telegram or Email',
    'contact.form.details': 'Project Details',
    'contact.form.send': 'Send Message',
    'contact.sent.title': 'Message Sent!',
    'contact.sent.desc': "I'll get back to you within 24 hours.",
    'contact.sent.another': 'Send another',

    // Docs
    'docs.title': 'Telegram Integration',
    'docs.subtitle': 'How to turn this site into a Mini App',
    'docs.step1.title': 'Step 1: BotFather',
    'docs.step1.desc': 'Open @BotFather in Telegram and create a new bot with /newbot or select an existing one.',
    'docs.step2.title': 'Step 2: Create Web App',
    'docs.step2.desc': 'Send /newapp to BotFather. Follow the prompts for title and description.',
    'docs.step3.title': 'Step 3: App URL',
    'docs.step3.desc': 'When asked for the "Web App URL", paste the link to this deployed website (e.g., https://your-domain.vercel.app).',
    'docs.step3.note': 'Note: The site must be served over HTTPS.',
    'docs.step4.title': 'Step 4: Done',
    'docs.step4.desc': 'Your app is now accessible via t.me/botname/appname or via the Menu Button if configured.',
  }
};