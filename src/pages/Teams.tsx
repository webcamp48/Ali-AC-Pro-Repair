import { Helmet } from 'react-helmet-async';
import { Award, Clock, Star, Phone, Mail, CheckCircle, Users } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';
import { generateEmailUrl, generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'Senior AC Technician',
      experience: '12 years',
      specialization: ['Central AC Systems', 'Split AC Installation', 'Commercial HVAC'],
      certifications: ['HVAC Certified', 'Refrigeration Expert', 'Safety Certified'],
      rating: 4.9,
      completedJobs: 850,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English'],
      availability: 'Full Time'
    },
    {
      id: 2,
      name: 'Mohammed Al-Ghamdi',
      position: 'Washing Machine Specialist',
      experience: '10 years',
      specialization: ['Front Load Washers', 'Top Load Washers', 'Dryer Repair'],
      certifications: ['Appliance Repair Certified', 'Electronics Expert', 'Brand Authorized'],
      rating: 4.8,
      completedJobs: 720,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English'],
      availability: 'Full Time'
    },
    {
      id: 3,
      name: 'Omar Al-Khalil',
      position: 'Refrigeration Expert',
      experience: '15 years',
      specialization: ['Refrigerator Repair', 'Freezer Service', 'Commercial Cooling'],
      certifications: ['Refrigeration Master', 'EPA Certified', 'Advanced Diagnostics'],
      rating: 5.0,
      completedJobs: 950,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English', 'Urdu'],
      availability: 'Full Time'
    },
    {
      id: 4,
      name: 'Khalid Al-Mansouri',
      position: 'Emergency Service Lead',
      experience: '8 years',
      specialization: ['Emergency Repairs', 'Quick Diagnostics', 'All Appliances'],
      certifications: ['Emergency Response', 'Multi-Brand Expert', 'Customer Service'],
      rating: 4.9,
      completedJobs: 600,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English'],
      availability: '24/7 Emergency'
    },
    {
      id: 5,
      name: 'Faisal Al-Zahra',
      position: 'Installation Specialist',
      experience: '9 years',
      specialization: ['New Installations', 'System Setup', 'Electrical Work'],
      certifications: ['Installation Expert', 'Electrical Certified', 'Safety Inspector'],
      rating: 4.8,
      completedJobs: 480,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English'],
      availability: 'Full Time'
    },
    {
      id: 6,
      name: 'Saeed Al-Otaibi',
      position: 'Maintenance Supervisor',
      experience: '11 years',
      specialization: ['Preventive Maintenance', 'System Optimization', 'Team Leadership'],
      certifications: ['Maintenance Manager', 'Quality Control', 'Training Certified'],
      rating: 4.9,
      completedJobs: 780,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      languages: ['Arabic', 'English'],
      availability: 'Full Time'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Expert Technicians' },
    { number: '100+', label: 'Years Combined Experience' },
    { number: '5000+', label: 'Jobs Completed' },
    { number: '4.9', label: 'Average Rating' }
  ];

  const certifications = [
    'HVAC Certified Professionals',
    'Appliance Repair Specialists',
    'Electrical Safety Certified',
    'Brand Authorized Technicians',
    'Emergency Response Trained',
    'Customer Service Excellence'
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Expert Certified Technicians</title>
        <meta name="description" content="Meet our team of expert AC and washing machine repair technicians in Saudi Arabia. Certified professionals with years of experience and 5-star ratings." />
        <meta name="keywords" content="AC repair technicians Saudi Arabia, certified appliance repair experts, professional repair team, experienced technicians" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Team</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              تعرف على محترفي المعتمدين لدينا الذين يجلبون سنوات من الخبرة والمهارة لكل مهمة إصلاح
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white">50+ Technicians</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Certified Experts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-white">4.9 Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {teamStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Technicians</h2>
              <p className="text-xl text-purple-200">Certified professionals ready to serve you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{member.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-lg rounded-full px-3 py-1">
                      <span className="text-white text-sm">{member.availability}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-300 font-semibold mb-2">{member.position}</p>
                    <p className="text-purple-200 text-sm mb-4">{member.experience} experience</p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Certifications:</h4>
                      <div className="space-y-1">
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-purple-200 text-sm">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-200 text-sm">Completed Jobs:</span>
                        <span className="text-white font-semibold">{member.completedJobs}+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm">Languages:</span>
                        <span className="text-white text-sm">{member.languages.join(', ')}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Team Certifications</h2>
              <p className="text-xl text-purple-200">Our technicians hold industry-leading certifications</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training & Development */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Continuous Training & Development
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    يخضع فريقنا لتدريبات دورية لمواكبة أحدث التقنيات وأساليب الإصلاح. نستثمر في تطوير فنيينا لضمان قدرتهم على التعامل مع أي مشكلة تتعلق بالأجهزة
                  </p>
                  <p>
                    يشارك كل عضو في الفريق في ورش عمل شهرية، وجلسات تدريبية خاصة بالعلامة التجارية، وبرامج اعتماد السلامة للحفاظ على أعلى معايير جودة الخدمة
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-semibold">Monthly Technical Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-semibold">Brand Authorization Programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-semibold">Safety & Quality Certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-semibold">Customer Service Excellence</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                  <img
                    src="https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Team Training"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Team */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">24/7 Emergency Team</h2>
            <p className="text-red-200 mb-8">
              Our dedicated emergency response team is available round-the-clock for urgent repairs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Available</h3>
                <p className="text-red-200">Always ready to respond</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Response</h3>
                <p className="text-red-200">Quick deployment across cities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Solutions</h3>
                <p className="text-red-200">Experienced emergency technicians</p>
              </div>
            </div>
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

        {/* Join Our Team */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Expert Team</h2>
            <p className="text-xl text-purple-200 mb-8">
             هل أنت فني ماهر وتبحث عن الانضمام إلى شركة رائدة في إصلاح الأجهزة المنزلية بجدة، السعودية؟
            </p>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">We're Looking For:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-purple-200">
                    <li>• 3+ years experience in appliance repair</li>
                    <li>• Technical certification preferred</li>
                    <li>• Strong problem-solving skills</li>
                    <li>• Excellent customer service</li>
                    <li>• Valid driving license</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">We Offer:</h4>
                  <ul className="space-y-2 text-purple-200">
                    <li>• Competitive salary packages</li>
                    <li>• Continuous training programs</li>
                    <li>• Health insurance coverage</li>
                    <li>• Performance bonuses</li>
                    <li>• Career growth opportunities</li>
                  </ul>
                </div>
              </div>
              <a
                href={generateEmailUrl(CONTACT_INFO.email)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Apply Now: {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Teams;