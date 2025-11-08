import { Award, Clock, Shield, Users } from "lucide-react";

// Contact Information
export const CONTACT_INFO = {
  phone: '+966 53 692 9151',
  email: 'info@acprorepair.sa',
  whatsapp: '966573460407',
  city: 'Jeddah',
  address: 'Jeddah, Saudi Arabia',
  locationLink: 'https://maps.google.com',
  workingHours: '24/7 Emergency Service',
  addressArabic: 'الرياض، المملكة العربية السعودية',
  googleReviewsLink: 'https://g.page/r/CcX3K1mY5b0DEAI/review'
};


// Company Information
export const COMPANY_INFO = {
  name: 'Ali Refrigeration and Air Conditioning',
  shortName: 'AC Pro Repair',
  nameArabic: "علي للتبريد والتكييف",
  tagline: 'Jeddah, Saudi Arabia',
  url: 'https://www.acprorepair.sa',
  taglineArabic: 'المملكة العربية السعودية',
  description: 'Professional AC and washing machine repair services across Saudi Arabia',
  descriptionArabic: 'خدمات إصلاح المكيفات وغسالات الملابس المحترفة في جميع أنحاء المملكة العربية السعودية',
  established: '2014',
  experience: '10+ years',
  experienceArabic: '10+ سنوات خبرة',
  customers: '1000+',
  customersArabic: '1000+ عميل راضي',
  technicians: '50+',
  techniciansArabic: '50+ فني خبير',
  rating: 4.9,
  totalReviews: 925
};

// Service Areas
export const SERVICE_AREAS = [
  {
    city: 'Riyadh',
    districts: ['Al-Malaz', 'Al-Olaya', 'Al-Sulaimaniyah', 'King Fahd District', 'Al-Nakheel', 'Al-Wurud'],
    responseTime: '30-60 minutes',
    coverage: '100%',
    emergencyFee: 0,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    city: 'Jeddah',
    districts: ['Al-Hamra', 'Al-Zahra', 'Al-Rawdah', 'Al-Salamah', 'Al-Marwah', 'Al-Faisaliyah'],
    responseTime: '45-75 minutes',
    coverage: '95%',
    emergencyFee: 25,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    city: 'Mecca',
    districts: ['Al-Aziziyah', 'Al-Mansour', 'Al-Shubaikah', 'Al-Maabdah', 'Al-Hindawiyah'],
    responseTime: '60-90 minutes',
    coverage: '90%',
    emergencyFee: 50,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    city: 'Medina',
    districts: ['Al-Haram', 'Quba', 'Al-Uyun', 'Al-Azhari', 'Al-Jumuah'],
    responseTime: '60-90 minutes',
    coverage: '85%',
    emergencyFee: 50,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

// Services
export const SERVICES = [
  {
    title: 'AC Installation & Repair',
    titleArabic: 'تركيب وإصلاح المكيفات',
    description: 'Complete air conditioning solutions for residential and commercial properties',
    descriptionArabic: 'حلول تكييف الهواء الكاملة للعقارات السكنية والتجارية',
    features: ['Installation of new units', 'Emergency repairs', 'Gas refilling', 'Duct cleaning', 'Thermostat repair'],
    featuresArabic: ['تركيب وحدات جديدة', 'إصلاحات طارئة', 'تعبئة الغاز', 'تنظيف المجاري', 'إصلاح منظم الحرارة'],
    image: '/ac-2.jpg?auto=compress&cs=tinysrgb&w=600',
    price: 'Starting from SAR 150',
    priceArabic: 'يبدأ من 150 ريال سعودي',
    category: 'ac-services'
  },
  {
    title: 'Washing Machine Service',
    titleArabic: 'خدمة غسالات الملابس',
    description: 'Expert repair and maintenance for all washing machine brands',
    descriptionArabic: 'إصلاح وصيانة خبير لجميع ماركات غسالات الملابس',
    features: ['Motor replacement', 'Drum repair', 'Water pump service', 'Control board repair', 'General maintenance'],
    featuresArabic: ['استبدال المحرك', 'إصلاح الطبلة', 'خدمة مضخة المياه', 'إصلاح لوحة التحكم', 'الصيانة العامة'],
    image: '/washing-machine-1.jpg?auto=compress&cs=tinysrgb&w=600',
    price: 'Starting from SAR 120',
    priceArabic: 'يبدأ من 120 ريال سعودي',
    category: 'washing-machine'
  },
  {
    title: 'Refrigerator Repair',
    titleArabic: 'إصلاح الثلاجات',
    description: 'Comprehensive refrigerator and freezer repair services',
    descriptionArabic: 'خدمات إصلاح الثلاجات والمجمدات الشاملة',
    features: ['Compressor repair', 'Cooling system service', 'Door seal replacement', 'Temperature control fix', 'Defrosting issues'],
    featuresArabic: ['إصلاح الضاغط', 'خدمة نظام التبريد', 'استبدال ختم الباب', 'إصلاح التحكم في درجة الحرارة', 'مشاكل إزالة الجليد'],
    image: '/farig-1.jpg?auto=compress&cs=tinysrgb&w=600',
    price: 'Starting from SAR 180',
    priceArabic: 'يبدأ من 180 ريال سعودي',
    category: 'refrigerator'
  }
];

// AC Types
export const AC_SERVICES = [
  "Central air conditioning systems",
  "Split air conditioners",
  "Window air conditioners",
  "Portable air conditioners",
  "Smart air conditioners",
  "Duct air conditioners",
  "Floor-mounted ACs",
  "Hybrid/Dual-fuel ACs"
];

// Pricing
export const PRICING_SERVICES = [
  {
    category: 'AC Services',
    items: [
      { name: 'AC Repair (Basic)', price: 150, description: 'تشخيص أساسي وإصلاحات بسيطة' },
      { name: 'AC Gas Refilling', price: 200, description: 'إعادة تعبئة الغاز بالكامل مع فحص التسرب' },
      { name: 'AC Installation', price: 300, description: 'تركيب جهاز تكييف جديد مع ضمان لمدة سنتين' },
      { name: 'AC Deep Cleaning', price: 120, description: 'خدمة تنظيف عميق كاملة لجهاز التكييف' },
      { name: 'AC Maintenance', price: 100, description: 'صيانة دورية وفحص شامل لجهاز التكييف' }
    ]
  },
  {
    category: 'Washing Machine Services',
    items: [
      { name: 'Motor Replacement', price: 250, description: 'استبدال المحرك الأصلي مع ضمان' },
      { name: 'Drum Repair', price: 180, description: 'إصلاح الأسطوانة وضبط التوازن' },
      { name: 'Control Board Repair', price: 200, description: 'إصلاح لوحة التحكم الإلكترونية' },
      { name: 'Water Pump Service', price: 150, description: 'إصلاح/استبدال مضخة المياه' },
      { name: 'General Repair', price: 120, description: 'إصلاحات أساسية للغسالات' }
    ]
  },
  {
    category: 'Other Appliances',
    items: [
      { name: 'Refrigerator Repair', price: 180, description: 'إصلاح نظام التبريد والصيانة العامة' },
      { name: 'Dryer Repair', price: 140, description: 'إصلاح وصيانة مجفف الملابس' },
      { name: 'Dishwasher Repair', price: 160, description: 'خدمة كاملة لغسالات الصحون' },
      { name: 'Microwave Repair', price: 100, description: 'خدمة إصلاح فرن الميكروويف' }
    ]
  }
];

// Brands
export const SUPPORTED_BRANDS = [
  { name: 'Samsung', multiplier: 1.0 },
  { name: 'LG', multiplier: 1.0 },
  { name: 'Whirlpool', multiplier: 1.1 },
  { name: 'Bosch', multiplier: 1.2 },
  { name: 'Siemens', multiplier: 1.2 },
  { name: 'Panasonic', multiplier: 1.1 },
  { name: 'Haier', multiplier: 0.9 },
  { name: 'Sharp', multiplier: 1.0 },
  { name: 'Toshiba', multiplier: 1.1 },
  { name: 'Electrolux', multiplier: 1.2 },
  { name: 'Frigidaire', multiplier: 1.0 },
  { name: 'Maytag', multiplier: 1.1 },
  { name: 'Other', multiplier: 1.0 },
];

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  youtube: '#'
};

// WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  general: 'Hello! I need help with my AC/Washing Machine. Please assist me. | مرحبا! أحتاج مساعدة في المكيف/غسالة الملابس. يرجى مساعدتي.',
  emergency: 'Emergency repair needed! | إصلاح طارئ مطلوب!',
  booking: 'I want to book a service appointment. | أريد حجز موعد للخدمة.',
  quote: 'I need a quote for repair service. | أحتاج عرض سعر لخدمة الإصلاح.'
};

// Company Values
export const VALUES = [
    {
      icon: Shield,
      title: 'Quality Service',
      description: 'نضمن أعلى معايير الجودة في جميع خدمات الإصلاح لدينا باستخدام قطع أصلية وتقنيات احترافية.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'فنيونا محترفون معتمدون حاصلون على تدريب واسع وسنوات من الخبرة العملية.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'رضا العملاء هو أولويتنا. نستمع إلى احتياجاتكم ونقدم حلولاً مخصصة.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'نحترم وقتكم ونضمن تقديم الخدمة بسرعة مع أقل قدر من الإزعاج لجدولكم.'
    }
  ];

// Achievements
export const ACHIEVEMENTS = [
    { number: '1000+', text: 'Satisfied Customers' },
    { number: '10+', text: 'Years Experience' },
    { number: '50+', text: 'Expert Technicians' },
    { number: '24/7', text: 'Emergency Service' }
  ];