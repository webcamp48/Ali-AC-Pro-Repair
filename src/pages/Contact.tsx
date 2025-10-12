import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';
import { generateEmailUrl, generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Contact Form Data:', data);
    alert('Thank you for your message! We will contact you soon.');
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [CONTACT_INFO.phone, CONTACT_INFO.whatsapp],
      action: generatePhoneUrl(CONTACT_INFO.phone)
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [CONTACT_INFO.email],
      action: generateEmailUrl(CONTACT_INFO.email)
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: [CONTACT_INFO.address],
      action: CONTACT_INFO.locationLink
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [CONTACT_INFO.workingHours, 'Mon-Sun: Always Available'],
      action: null
    }
  ];

  const offices = [
    {
      city: 'Riyadh',
      address: CONTACT_INFO.address,
      phone: generatePhoneUrl(CONTACT_INFO.phone),
      email: CONTACT_INFO.email
    },
    {
      city: CONTACT_INFO.city,
      address: CONTACT_INFO.addressArabic,
      phone: generatePhoneUrl(CONTACT_INFO.phone),
      email: CONTACT_INFO.email
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Get in Touch for Expert Service</title>
        <meta name="description" content={`Contact ${COMPANY_INFO.name} for professional AC and washing machine repair services in ${CONTACT_INFO.address}. 24/7 emergency support, multiple locations, instant response.`} />
        <meta name="keywords" content={`contact AC repair ${CONTACT_INFO.address}, appliance repair contact, emergency repair service, AC repair phone number, washing machine repair contact`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Us</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              تواصل مع فريق الخبراء لدينا لجميع احتياجاتك المتعلقة بإصلاح مكيفات الهواء والغسالات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency Call</span>
              </a>
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-purple-200">
                        {info.action && idx === 0 ? (
                          <a
                            href={info.action}
                            className="hover:text-white transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-8 h-8 mr-3" />
                  Send Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="+966 xxx xxx xxx"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone.message as string}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Service Type</label>
                    <select
                      {...register('serviceType')}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                    >
                      <option value="">Select Service</option>
                      <option value="ac-repair" className="bg-gray-800">AC Repair</option>
                      <option value="ac-installation" className="bg-gray-800">AC Installation</option>
                      <option value="washing-machine" className="bg-gray-800">Washing Machine Repair</option>
                      <option value="refrigerator" className="bg-gray-800">Refrigerator Repair</option>
                      <option value="maintenance" className="bg-gray-800">Maintenance Service</option>
                      <option value="emergency" className="bg-gray-800">Emergency Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">City</label>
                    <select
                      {...register('city')}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                    >
                      <option value="">Select City</option>
                      <option value="riyadh" className="bg-gray-800">Riyadh</option>
                      <option value="jeddah" className="bg-gray-800">Jeddah</option>
                      <option value="mecca" className="bg-gray-800">Mecca</option>
                      <option value="medina" className="bg-gray-800">Medina</option>
                      <option value="dammam" className="bg-gray-800">Dammam</option>
                      <option value="khobar" className="bg-gray-800">Khobar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none resize-none"
                      placeholder="Describe your problem or service requirement..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message as string}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Map & Office Locations */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Our Locations</h2>
                  <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl h-64 flex items-center justify-center border border-purple-400/30">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-white font-semibold">Interactive Map</p>
                      <p className="text-purple-200 text-sm">Service areas across {COMPANY_INFO.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Office Locations</h2>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">{office.city}</h3>
                        <div className="space-y-1 text-purple-200 text-sm">
                          <p className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{office.address}</span>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <a href={office.phone} className="hover:text-white transition-colors">
                              {office.phone}
                            </a>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                              {office.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-purple-200">Quick answers to common questions</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you respond to emergency calls?",
                  answer: "We provide 24/7 emergency service with response time within 1-2 hours in major cities."
                },
                {
                  question: "Do you provide warranty on repairs?",
                  answer: "Yes, we provide 2-year warranty on all repairs and 1-year warranty on parts replacement."
                },
                {
                  question: "ما هي المناطق التي تغطونها في المملكة العربية السعودية؟",
                  answer: "نغطي جميع المدن الرئيسية بما في ذلك الرياض، جدة، مكة، المدينة المنورة، الدمام والمناطق المجاورة."
                },
                {
                  question: "Do you charge for diagnosis?",
                  answer: "No, we provide free diagnosis and assessment. You only pay if you proceed with the repair."
                },
                {
                  question: "ما هي طرق الدفع التي تقبلونها؟",
                  answer: "نقبل الدفع نقداً، وبطاقات الائتمان/الخصم، والتحويلات البنكية، وتطبيقات الدفع عبر الهاتف المحمول."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-purple-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">خدمة الطوارئ متاحة</h2>
            <p className="text-red-200 mb-8">
              Need immediate help? Our emergency team is available 24/7 for urgent repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Emergency: {CONTACT_INFO.phone}
              </a>
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGES.emergency)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;