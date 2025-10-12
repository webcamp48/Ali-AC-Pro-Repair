import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Calendar, MapPin, CheckCircle, Filter, Image } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';
import { generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
  description: string;
  customerName: string;
  customerReview: string;
  problemSolved: string;
  timeSpent: string;
  warranty: string;
}
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ac-repair', name: 'AC Repair' },
    { id: 'ac-installation', name: 'AC Installation' },
    { id: 'washing-machine', name: 'Washing Machine' },
    { id: 'refrigerator', name: 'Refrigerator' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Central AC System Repair - Villa in Riyadh',
      category: 'ac-repair',
      location: 'Al-Malaz, Riyadh',
      date: '2024-01-15',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'إصلاح نظام تكييف الهواء المركزي بالكامل بما في ذلك استبدال الضاغط وتنظيف القناة.',
      customerName: 'Ahmed Al-Rashid',
      customerReview: 'Excellent service! The team was professional and fixed our AC system perfectly. Highly recommended!',
      problemSolved: 'Faulty compressor and blocked ducts causing poor cooling',
      timeSpent: '4 hours',
      warranty: '2 years'
    },
    {
      id: 2,
      title: 'Split AC Installation - Apartment Complex',
      category: 'ac-installation',
      location: 'Al-Olaya, Riyadh',
      date: '2022-01-20',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'تركيب مكيف هواء سبليت جديد مع توصيلات كهربائية مناسبة وشحن الغاز.',
      customerName: 'Fatima Al-Zahra',
      customerReview: 'Perfect installation! Clean work and excellent cooling performance.',
      problemSolved: 'New AC installation for bedroom and living room',
      timeSpent: '6 hours',
      warranty: '2 years'
    },
    {
      id: 3,
      title: 'Washing Machine Motor Replacement',
      category: 'washing-machine',
      location: 'Al-Hamra, Jeddah',
      date: '2023-01-25',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'استبدال محرك الغسالة سامسونج بقطع غيار أصلية.',
      customerName: 'Mohammed Al-Ghamdi',
      customerReview: 'خدمة سريعة وفعّالة. الجهاز يعمل كأنه جديد الآن',
      problemSolved: 'Faulty motor causing washing machine to stop working',
      timeSpent: '2 hours',
      warranty: '1 year'
    },
    {
      id: 4,
      title: 'Commercial AC Maintenance - Office Building',
      category: 'commercial',
      location: 'King Fahd District, Riyadh',
      date: '2025-02-01',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'صيانة كاملة لـ 20 وحدة تكييف في مبنى المكاتب التجارية',
      customerName: 'Al-Rajhi Company',
      customerReview: 'Professional team handled our large-scale maintenance perfectly. Great service!',
      problemSolved: 'Regular maintenance and filter replacement for optimal performance',
      timeSpent: '8 hours',
      warranty: '6 months'
    },
    {
      id: 5,
      title: 'Refrigerator Compressor Repair',
      category: 'refrigerator',
      location: 'Al-Zahra, Jeddah',
      date: '2024-02-05',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'إصلاح ضاغط ثلاجة LG وإعادة تعبئة الغاز',
      customerName: 'Sara Al-Mansouri',
      customerReview: 'عمل ممتاز! الثلاجة تبرد بشكل ممتاز الآن',
      problemSolved: 'Compressor malfunction causing poor cooling',
      timeSpent: '3 hours',
      warranty: '1 year'
    },
    {
      id: 6,
      title: 'Window AC Deep Cleaning & Repair',
      category: 'ac-repair',
      location: 'Al-Faisaliyah, Dammam',
      date: '2025-02-10',
      rating: 5,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'تنظيف عميق كامل وإصلاحات بسيطة لوحدة تكييف الهواء',
      customerName: 'Omar Al-Khalil',
      customerReview: 'Amazing transformation! AC is working much better and quieter now.',
      problemSolved: 'Dirty filters and coils causing poor performance',
      timeSpent: '2 hours',
      warranty: '6 months'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Completed Projects' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '2 Year', label: 'Warranty Period' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Our Completed Projects & Customer Reviews</title>
        <meta name="description" content={`View our portfolio of completed AC and washing machine repair projects across ${CONTACT_INFO.address}. Real customer reviews, before/after photos, and success stories.`} />
        <meta name="keywords" content={`AC repair portfolio ${CONTACT_INFO.address}, customer reviews, before after photos, completed projects, appliance repair gallery`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Portfolio</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              عرض مشاريعنا الناجحة لإصلاح أجهزة التكييف والغسالات في جميع أنحاء جدة، المملكة العربية السعودية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Image className="w-5 h-5 text-purple-400" />
                <span className="text-white">Real Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
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

        {/* Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-bold text-white">Filter Projects</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                      : 'bg-white/10 backdrop-blur-lg border border-white/20 text-purple-200 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{project.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-white font-semibold text-sm mb-1">Customer: {project.customerName}</p>
                      <p className="text-purple-200 text-sm line-clamp-2">"{project.customerReview}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white hover:text-purple-300 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Before</h3>
                    <img
                      src={selectedProject.beforeImage}
                      alt="Before"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">After</h3>
                    <img
                      src={selectedProject.afterImage}
                      alt="After"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Project Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-purple-200">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-purple-200">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(selectedProject.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-purple-200">
                          <CheckCircle className="w-4 h-4" />
                          <span>Time Spent: {selectedProject.timeSpent}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-purple-200">
                          <Star className="w-4 h-4" />
                          <span>Warranty: {selectedProject.warranty}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Problem Solved</h3>
                      <p className="text-purple-200">{selectedProject.problemSolved}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Customer Review</h3>
                      <div className="bg-white/5 rounded-2xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex space-x-1">
                            {[...Array(selectedProject.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-white font-semibold">{selectedProject.customerName}</span>
                        </div>
                        <p className="text-purple-200">"{selectedProject.customerReview}"</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Service Description</h3>
                      <p className="text-purple-200">{selectedProject.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل أنت مستعد للانضمام إلى قصص نجاحنا؟
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Let us solve your AC and washing machine problems with the same expertise and care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Call Now: {CONTACT_INFO.phone}
              </a>
              <a
                href={generateWhatsAppUrl(WHATSAPP_MESSAGES.booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;