import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, CheckCircle, Calculator, Navigation } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, SERVICE_AREAS, WHATSAPP_MESSAGES } from '../constants';
import { generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

const ServiceArea = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [distance, setDistance] = useState('');


  const calculateServiceCost = () => {
    const area = SERVICE_AREAS.find(area => area.city === selectedCity);
    if (!area || !distance) return null;

    const basePrice = 150;
    const distanceNum = parseInt(distance);
    let travelFee = 0;

    if (distanceNum > 20) travelFee = (distanceNum - 20) * 2;
    if (distanceNum > 50) travelFee += (distanceNum - 50) * 1;

    return {
      basePrice,
      travelFee,
      emergencyFee: area.emergencyFee,
      total: basePrice + travelFee + area.emergencyFee
    };
  };

  const serviceFeatures = [
    {
      icon: Clock,
      title: 'Fast Response Time',
      description: 'Quick response across all service areas'
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Serving major cities and districts'
    },
    {
      icon: Phone,
      title: '24/7 Availability',
      description: 'Emergency service available anytime'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Same quality service everywhere'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Coverage Map & Response Times</title>
        <meta name="description" content={`Check our service coverage areas across ${CONTACT_INFO.address}. Fast response times in Riyadh, Jeddah, Mecca, Medina, Dammam and more cities. 24/7 emergency service available.`} />
        <meta name="keywords" content={`AC repair service areas ${CONTACT_INFO.address}, coverage map, response time, emergency service areas, appliance repair locations`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Areas</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              نحن نقدم خدمات إصلاح المكيفات والغسالات الاحترافية في المدن الكبرى في جميع أنحاء المملكة العربية السعودية، بما في ذلك جدة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">8+ Major Cities</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-white">Fast Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="text-white">Quality Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Coverage Areas</h2>
              <p className="text-xl text-purple-200">Professional service across {CONTACT_INFO.address}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_AREAS.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={area.image}
                    alt={area.city}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{area.city}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">Response Time:</span>
                        <span className="text-white font-semibold">{area.responseTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">Coverage:</span>
                        <span className="text-green-400 font-semibold">{area.coverage}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200">Emergency Fee:</span>
                        <span className="text-white font-semibold">
                          {area.emergencyFee === 0 ? 'Free' : `+SAR ${area.emergencyFee}`}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Districts Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.districts.slice(0, 4).map((district, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm"
                          >
                            {district}
                          </span>
                        ))}
                        {area.districts.length > 4 && (
                          <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                            +{area.districts.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={generatePhoneUrl(CONTACT_INFO.phone)}
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call for Service</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distance Calculator */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <Calculator className="w-8 h-8 mr-3" />
                Service Cost Calculator
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white font-semibold mb-3">Select Your City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Choose Your City</option>
                    {SERVICE_AREAS.map((area) => (
                      <option key={area.city} value={area.city} className="bg-gray-800">
                        {area.city}
                      </option>
                    ))}SERVICE_AREAS
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Distance from City Center (KM)</label>
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="Enter distance in KM"
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>

              {selectedCity && distance && (
                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Cost Breakdown</h3>
                  {(() => {
                    const cost = calculateServiceCost();
                    return cost ? (
                      <div className="space-y-3">
                        <div className="flex justify-between text-white">
                          <span>Base Service Fee:</span>
                          <span>SAR {cost.basePrice}</span>
                        </div>
                        {cost.travelFee > 0 && (
                          <div className="flex justify-between text-orange-300">
                            <span>Travel Fee ({distance}km):</span>
                            <span>SAR {cost.travelFee}</span>
                          </div>
                        )}
                        {cost.emergencyFee > 0 && (
                          <div className="flex justify-between text-red-300">
                            <span>Area Service Fee:</span>
                            <span>SAR {cost.emergencyFee}</span>
                          </div>
                        )}
                        <div className="border-t border-white/20 pt-3 mt-3">
                          <div className="flex justify-between text-2xl font-bold text-white">
                            <span>Total Estimated Cost:</span>
                            <span>SAR {cost.total}</span>
                          </div>
                        </div>
                        <p className="text-purple-200 text-sm text-center mt-4">
                          * Final cost may vary based on actual service requirements
                        </p>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Service Coverage Map</h2>
              <p className="text-xl text-purple-200">Interactive map showing our service areas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl h-96 flex items-center justify-center border border-purple-400/30">
                <div className="text-center">
                  <Navigation className="w-20 h-20 text-purple-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Service Map</h3>
                  <p className="text-purple-200 mb-6 max-w-md">
                    Comprehensive coverage across {COMPANY_INFO.tagline} with real-time service availability
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">8+</div>
                      <div className="text-purple-200 text-sm">Major Cities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-purple-200 text-sm">Districts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-purple-200 text-sm">Emergency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">90%</div>
                      <div className="text-purple-200 text-sm">Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">خدمة الطوارئ متاحة</h2>
            <p className="text-red-200 mb-8">
              Need immediate service in any of our coverage areas? Our emergency team is ready to help!
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

        {/* Service Guarantee */}
        <section className="py-16 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Service Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Same Quality Everywhere</h3>
                <p className="text-purple-200">Consistent high-quality service across all areas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Timely Response</h3>
                <p className="text-purple-200">Committed response times for each service area</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-purple-200">Round-the-clock customer support and emergency service</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceArea;