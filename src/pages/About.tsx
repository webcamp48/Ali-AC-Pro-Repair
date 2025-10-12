import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import { AC_SERVICES, ACHIEVEMENTS, COMPANY_INFO, CONTACT_INFO, VALUES } from '../constants';

const About = () => {
  
  return (
    <>
      <Helmet>
        <title>About Us - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Expert Appliance Repair Company</title>
        <meta name="description" content={`Learn about ${COMPANY_INFO.name} - ${CONTACT_INFO.address}'s trusted appliance repair company with 10+ years experience, certified technicians, and 1000+ satisfied customers.`} />
        <meta name="keywords" content={`about ${COMPANY_INFO.name}, appliance repair company ${CONTACT_INFO.address}, certified technicians, professional repair services`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> {COMPANY_INFO.name}</span>
              </h1>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                شريكك الموثوق لخدمات إصلاح المكيفات والغسالات الاحترافية في جميع أنحاء المملكة العربية السعودية.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    Established in 2020, {COMPANY_INFO.name} has been proudly serving customers in {CONTACT_INFO.address} with top-notch appliance repair services. What began as a small family business has grown into one of the most trusted service providers in the region.
                  </p>
                  <p>
                    Since then, we have built our reputation on reliability, expertise, and customer satisfaction. Our team of certified technicians has successfully completed over 10,000 repair jobs, earning the confidence of families and businesses across the Kingdom.
                  </p>
                  <p>
                    We specialize in repairing all types of air conditioners, including:
                  </p>
                  <ul className="space-y-1">
                    {AC_SERVICES.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-purple-200 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Award Winner</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                  <img
                    src="https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Our Workshop"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-purple-200">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-purple-200">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-purple-200">
                  لتقديم خدمات إصلاح الأجهزة المنزلية الموثوقة والمهنية وبأسعار معقولة، مع تجاوز توقعات العملاء وبناء علاقات طويلة الأمد قائمة على الثقة والتميز.

                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-purple-200">
                  لتصبح المزود الرائد لخدمات إصلاح الأجهزة المنزلية في الشرق الأوسط، والمعروف بالابتكار والجودة ورضا العملاء، مع المساهمة في مستقبل مستدام.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;