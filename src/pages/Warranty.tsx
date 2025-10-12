import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, Phone, FileText, Search, Award, AlertCircle } from 'lucide-react';
import { generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';
import { COMPANY_INFO, CONTACT_INFO } from '../constants';

type WarrantyResult = {
  error?: string;
  number?: string;
  status?: string;
  date?: string;
  expiry?: string;
  service?: string;
  technician?: string;
  customer?: string;
  location?: string;
};
const Warranty = () => {
  const [warrantyNumber, setWarrantyNumber] = useState('');
  const [searchResult, setSearchResult] = useState<WarrantyResult | null>(null);

  const warrantyTypes = [
    {
      type: 'Service Warranty',
      duration: '2 Years',
      coverage: 'All repair work and labor',
      description: 'تغطية شاملة لجميع خدمات الإصلاح التي يقوم بها فنيونا',
      color: 'from-green-500 to-green-600',
      features: [
        'Free revisit if same problem occurs',
        'No additional labor charges',
        'Priority service scheduling',
        'Quality guarantee on workmanship'
      ]
    },
    {
      type: 'Parts Warranty',
      duration: '1 Year',
      coverage: 'Genuine replacement parts',
      description: 'تغطية الضمان الكاملة على جميع الأجزاء الأصلية المستخدمة في الإصلاحات',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Free part replacement if defective',
        'Genuine manufacturer parts only',
        'Installation included',
        'No hidden charges'
      ]
    },
    {
      type: 'Installation Warranty',
      duration: '2 Years',
      coverage: 'New AC installations',
      description: 'ضمان كامل على تركيبات وتجهيزات تكييف الهواء الجديدة',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Installation workmanship guarantee',
        'System performance assurance',
        'Free maintenance visits',
        'Technical support included'
      ]
    }
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: 'Service Completion',
      description: 'Receive warranty certificate after service completion',
      icon: FileText
    },
    {
      step: 2,
      title: 'Issue Occurs',
      description: 'Contact us if the same problem occurs within warranty period',
      icon: Phone
    },
    {
      step: 3,
      title: 'Verification',
      description: 'We verify the warranty status and schedule a visit',
      icon: Search
    },
    {
      step: 4,
      title: 'Free Service',
      description: 'Receive free repair service under warranty terms',
      icon: CheckCircle
    }
  ];

  const handleWarrantySearch = () => {
    // Simulate warranty search
    if (warrantyNumber.length >= 6) {
      setSearchResult({
        number: warrantyNumber,
        status: 'Active',
        service: 'AC Repair - Compressor Replacement',
        date: '2024-01-15',
        expiry: '2026-01-15',
        technician: 'Ahmed Al-Rashid',
        customer: 'Mohammed Al-Ghamdi',
        location: 'Riyadh, Al-Malaz'
      });
    } else {
      setSearchResult({ error: 'Invalid warranty number' });
    }
  };

  const partsWarranty = [
    { brand: 'Samsung', warranty: '1 Year', availability: '✓ Available' },
    { brand: 'LG', warranty: '1 Year', availability: '✓ Available' },
    { brand: 'Whirlpool', warranty: '1 Year', availability: '✓ Available' },
    { brand: 'Bosch', warranty: '1 Year', availability: '✓ Available' },
    { brand: 'Siemens', warranty: '1 Year', availability: '✓ Available' },
    { brand: 'Panasonic', warranty: '1 Year', availability: '✓ Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Warranty - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | 2 Year Service Warranty & Parts Coverage</title>
        <meta name="description" content="Comprehensive warranty coverage on AC and washing machine repairs in Saudi Arabia. 2-year service warranty, 1-year parts warranty, and genuine parts guarantee." />
        <meta name="keywords" content="AC repair warranty Saudi Arabia, appliance repair guarantee, parts warranty, service warranty, warranty coverage" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Warranty &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Guarantee</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              تغطية ضمان شاملة لجميع خدمات الإصلاح لدينا وقطع الغيار الأصلية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white">2 Year Service Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-white">Genuine Parts Only</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="text-white">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Types */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Warranty Coverage</h2>
              <p className="text-xl text-purple-200">Comprehensive protection for your peace of mind</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warrantyTypes.map((warranty, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`bg-gradient-to-r ${warranty.color} p-6 text-center`}>
                    <Shield className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{warranty.type}</h3>
                    <div className="text-3xl font-bold text-white">{warranty.duration}</div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Coverage:</h4>
                    <p className="text-purple-200 mb-4">{warranty.coverage}</p>
                    <p className="text-purple-200 text-sm mb-6">{warranty.description}</p>
                    <div className="space-y-2">
                      {warranty.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-purple-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Checker */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <Search className="w-8 h-8 mr-3" />
                Check Warranty Status
              </h2>

              <div className="max-w-md mx-auto mb-8">
                <label className="block text-white font-semibold mb-3">Enter Warranty Number</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={warrantyNumber}
                    onChange={(e) => setWarrantyNumber(e.target.value)}
                    placeholder="e.g., WR2024001234"
                    className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                  />
                  <button
                    onClick={handleWarrantySearch}
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Search
                  </button>
                </div>
              </div>

              {searchResult && (
                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-400/30">
                  {searchResult.error ? (
                    <div className="text-center">
                      <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                      <p className="text-red-400 font-semibold">{searchResult.error}</p>
                      <p className="text-purple-200 text-sm mt-2">Please check your warranty number and try again</p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">Warranty Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-purple-200">Warranty Number:</span>
                            <span className="text-white font-semibold">{searchResult.number}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Status:</span>
                            <span className="text-green-400 font-semibold">{searchResult.status}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Service Date:</span>
                            <span className="text-white">{searchResult.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Expiry Date:</span>
                            <span className="text-white">{searchResult.expiry}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-purple-200">Service:</span>
                            <span className="text-white">{searchResult.service}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Technician:</span>
                            <span className="text-white">{searchResult.technician}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Customer:</span>
                            <span className="text-white">{searchResult.customer}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-200">Location:</span>
                            <span className="text-white">{searchResult.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <a
                          href={generatePhoneUrl(CONTACT_INFO.phone)}
                          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                        >
                          Claim Warranty Service
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Warranty Process */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How Warranty Works</h2>
              <p className="text-xl text-purple-200">Simple steps to claim your warranty</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {warrantyProcess.map((process, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Step {process.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-purple-200 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parts Warranty */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Genuine Parts Warranty</h2>
              <p className="text-xl text-purple-200">All major brands covered with genuine parts warranty</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
                <h3 className="text-2xl font-bold text-white text-center">Brand Coverage</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-white font-semibold py-3">Brand</th>
                        <th className="text-center text-white font-semibold py-3">Warranty Period</th>
                        <th className="text-center text-white font-semibold py-3">Parts Availability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partsWarranty.map((brand, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-4 text-white font-medium">{brand.brand}</td>
                          <td className="py-4 text-center text-purple-200">{brand.warranty}</td>
                          <td className="py-4 text-center text-green-400 font-semibold">{brand.availability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Terms */}
        <section className="py-16 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Warranty Terms & Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Covered</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Workmanship defects</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Defective genuine parts</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Installation issues</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Same problem recurrence</span>
                    </li>
                    <li className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Free revisit service</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Important Notes</h3>
                  <ul className="space-y-2 text-purple-200 text-sm">
                    <li>• Warranty valid from service completion date</li>
                    <li>• Original warranty certificate required</li>
                    <li>• Covers same problem only, not new issues</li>
                    <li>• Physical damage not covered</li>
                    <li>• Misuse or negligence voids warranty</li>
                    <li>• Parts warranty separate from service warranty</li>
                    <li>• Free service within warranty period</li>
                    <li>• Transferable to new property owner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Warranty */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل تحتاج إلى خدمة الضمان؟
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Contact us to claim your warranty service or get more information about our warranty coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Warranty Dept</span>
              </a>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                WhatsApp Warranty
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Warranty;