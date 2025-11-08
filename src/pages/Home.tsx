import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Shield, Users, Star, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, SERVICES, WHATSAPP_MESSAGES, } from '../constants';
import { generateWhatsAppUrl, generatePhoneUrl } from '../utils/helpers';
import StatCard from '../components/common/StatCard';
import ContactButton from '../components/common/ContactButton';
import ServiceCard from '../components/common/ServiceCard';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      titleArabic: 'خدمة طوارئ 24/7',
      description: 'Round-the-clock support for urgent AC and washing machine repairs',
      descriptionArabic: 'دعم على مدار الساعة لإصلاحات المكيفات وغسالات الملابس الطارئة'
    },
    {
      icon: Shield,
      title: '2 Year Warranty',
      titleArabic: 'ضمان سنتين',
      description: 'Comprehensive warranty on all repairs and installations',
      descriptionArabic: 'ضمان شامل على جميع الإصلاحات والتركيبات'
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      titleArabic: 'فنيون خبراء',
      description: 'Certified professionals with 10+ years experience',
      descriptionArabic: 'محترفون معتمدون بخبرة أكثر من 10 سنوات'
    },
    {
      icon: Star,
      title: '5-Star Rated',
      titleArabic: 'تقييم 5 نجوم',
      description: 'Over 1000+ satisfied customers across Saudi Arabia',
      descriptionArabic: 'أكثر من 1000 عميل راضي في جميع أنحاء المملكة العربية السعودية'
    }
  ];

  const trustIndicators = [
    { number: `${COMPANY_INFO.customers}+`, label: 'Happy Customers' },
    { number: `${COMPANY_INFO.experience}`, label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '2 Year', label: 'Warranty' }
  ];

  return (
    <>
      <Helmet>
        <title>{COMPANY_INFO.name} {COMPANY_INFO.tagline} - Professional AC & Washing Machine Repair Services</title>
        <meta name="description" content={`Expert AC and washing machine repair services in ${CONTACT_INFO.address}. 24/7 emergency service, certified technicians, 2-year warranty. Call ${CONTACT_INFO.phone} for immediate assistance.`} />
        <meta name="keywords" content={`AC repair ${CONTACT_INFO.address}, washing machine repair, air conditioning service, appliance repair Riyadh, emergency AC repair`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="block text-2xl md:text-3xl text-purple-300 font-arabic mb-2">
                    {COMPANY_INFO.nameArabic}
                  </span>
                  Professional 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> AC & Washing Machine </span>
                  Repair Services
                  <span className="block text-lg md:text-xl text-purple-300 font-arabic mt-2">
                    خدمات إصلاح المكيفات وغسالات الملابس المحترفة
                  </span>
                </h1>
                <p className="text-xl text-purple-200 mb-8">
                  Fast, reliable, and affordable appliance repair services across {COMPANY_INFO.tagline}. 
                  Get your AC and washing machine fixed by certified experts with 24/7 emergency support.
                  <span className="block text-lg text-purple-300 font-arabic mt-2">
                    خدمات إصلاح الأجهزة السريعة والموثوقة والميسورة التكلفة في جميع أنحاء المملكة العربية السعودية
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Book Service Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <ContactButton
                    href={generatePhoneUrl()}
                    icon={Phone}
                    text="Call Emergency"
                    variant="secondary"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                  <img
                    src="/ac-1.jpg?auto=compress&cs=tinysrgb&w=600"
                    alt="AC Repair Technician"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-2xl">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Available</div>
                  <div className="text-xs font-arabic">متاح</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose {COMPANY_INFO.name}?
                <span className="block text-2xl text-purple-300 font-arabic mt-2">
                  لماذا تختار إصلاح المكيفات المحترف؟
                </span>
              </h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                We provide exceptional appliance repair services with guaranteed satisfaction
                <span className="block text-lg text-purple-300 font-arabic mt-2">
                  نحن نقدم خدمات إصلاح الأجهزة الاستثنائية مع ضمان الرضا
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2 font-arabic">{feature.titleArabic}</h4>
                  <p className="text-purple-200 mb-2">{feature.description}</p>
                  <p className="text-purple-300 text-sm font-arabic">{feature.descriptionArabic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
                <span className="block text-2xl text-purple-300 font-arabic mt-2">
                  خدماتنا
                </span>
              </h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Comprehensive repair and maintenance services for all your appliances
                <span className="block text-lg text-purple-300 font-arabic mt-2">
                  خدمات الإصلاح والصيانة الشاملة لجميع أجهزتك
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  titleArabic={service.titleArabic}
                  description={service.description}
                  descriptionArabic={service.descriptionArabic}
                  features={service.features}
                  image={service.image}
                  price={service.price}
                  priceArabic={service.priceArabic}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل تحتاج إلى خدمة إصلاح فورية؟
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Don't wait! Get professional repair service for your AC or washing machine. 
              Our certified technicians are ready to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton
                href={generatePhoneUrl()}
                icon={Phone}
                text="Emergency Call"
                variant="emergency"
              />
              <ContactButton
                href={generateWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                icon={ArrowRight}
                text="WhatsApp Now"
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustIndicators.map((indicator, index) => (
                <StatCard
                  key={index}
                  number={indicator.number}
                  label={indicator.label}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;