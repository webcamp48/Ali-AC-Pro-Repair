import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Calculator, Clock, Shield, Phone } from 'lucide-react';
import { generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';
import { COMPANY_INFO, CONTACT_INFO, PRICING_SERVICES, SUPPORTED_BRANDS, WHATSAPP_MESSAGES } from '../constants';

const Pricing = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');



  const problemTypes = [
    { name: 'Minor Issue', multiplier: 1.0, description: 'Simple problems, quick fix' },
    { name: 'Moderate Issue', multiplier: 1.3, description: 'Requires some diagnosis time' },
    { name: 'Complex Issue', multiplier: 1.6, description: 'Extensive repair work needed' },
    { name: 'Multiple Problems', multiplier: 1.8, description: 'Several issues to address' }
  ];

  const additionalServices = [
    { name: 'Emergency Service (24/7)', price: 100, description: 'Available anytime' },
    { name: 'Urgent Service (Same Day)', price: 50, description: 'Priority scheduling' },
    { name: 'Home Visit Charge', price: 30, description: 'Within city limits' },
    { name: 'Extended Warranty (1 Year)', price: 80, description: 'Additional warranty coverage' }
  ];

  const calculateEstimate = () => {
    const service = PRICING_SERVICES
      .flatMap(category => category.items)
      .find(item => item.name === selectedService);
    
    const brand = SUPPORTED_BRANDS.find(b => b.name === selectedBrand);
    const problem = problemTypes.find(p => p.name === selectedProblem);

    if (!service || !brand || !problem) return 0;

    return Math.round(service.price * brand.multiplier * problem.multiplier);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Transparent Appliance Repair Costs</title>
        <meta name="description" content="Transparent pricing for AC and washing machine repair services in Saudi Arabia. Get instant quotes, compare costs, and book affordable repair services." />
        <meta name="keywords" content="appliance repair cost Saudi Arabia, AC repair price, washing machine repair cost, transparent pricing, affordable repair service" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Pricing</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              لا تكاليف خفية، ولا مفاجآت. احصل على أسعار مُسبقة لجميع خدمات إصلاح الأجهزة لدينا
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-white">Free Diagnosis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-16 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <Calculator className="w-8 h-8 mr-3" />
                Price Calculator
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-3">Select Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Choose Service</option>
                    {PRICING_SERVICES.map((category) =>
                      category.items.map((item) => (
                        <option key={item.name} value={item.name} className="bg-gray-800">
                          {item.name} - SAR {item.price}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Select Brand</option>
                    {SUPPORTED_BRANDS.map((brand) => (
                      <option key={brand.name} value={brand.name} className="bg-gray-800">
                        {brand.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Problem Type</label>
                  <select
                    value={selectedProblem}
                    onChange={(e) => setSelectedProblem(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Problem Complexity</option>
                    {problemTypes.map((problem) => (
                      <option key={problem.name} value={problem.name} className="bg-gray-800">
                        {problem.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedService && selectedBrand && selectedProblem && (
                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Estimated Cost</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">SAR {calculateEstimate()}</div>
                    <p className="text-purple-200 mb-4">Base price may vary based on actual diagnosis</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={generatePhoneUrl(CONTACT_INFO.phone)}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call for Confirmation</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Pricing Tables */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Pricing</h2>
              <p className="text-xl text-purple-200">Detailed pricing for all our services</p>
            </div>

            <div className="space-y-12">
              {PRICING_SERVICES.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left text-white font-semibold py-3">Service</th>
                            <th className="text-left text-white font-semibold py-3">Description</th>
                            <th className="text-right text-white font-semibold py-3">Price (SAR)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b border-white/10">
                              <td className="py-4 text-white font-medium">{item.name}</td>
                              <td className="py-4 text-purple-200">{item.description}</td>
                              <td className="py-4 text-right text-white font-bold text-lg">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
              <p className="text-xl text-purple-200">Optional services for enhanced convenience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-purple-200 text-sm mb-3">{service.description}</p>
                  <div className="text-2xl font-bold text-white">+SAR {service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Notes */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Free diagnosis and assessment</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>2-year warranty on repairs</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Genuine replacement parts</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Professional service guarantee</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Important Notes</h3>
                  <ul className="space-y-2 text-purple-200 text-sm">
                    <li>• Prices may vary based on actual diagnosis</li>
                    <li>• Parts cost not included in service charges</li>
                    <li>• Emergency services available 24/7</li>
                    <li>• Group discounts available for multiple appliances</li>
                    <li>• Free revisit within warranty period</li>
                    <li>• Payment accepted: Cash, Card, Bank Transfer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Quote */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              For complex repairs or multiple appliances, contact us for a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call for Quote</span>
              </a>
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                WhatsApp Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;