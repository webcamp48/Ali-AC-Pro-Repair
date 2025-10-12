import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, Shield, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SUPPORTED_BRANDS, } from '../constants';
import ServiceCard from '../components/common/ServiceCard';
import PageHeader from '../components/common/PageHeader';
import EmergencySection from '../components/common/EmergencySection';

const Services = () => {
  const headerBadges = [
    { icon: Shield, text: '2 Year Warranty', color: 'text-green-400' },
    { icon: Clock, text: '24/7 Emergency', color: 'text-blue-400' },
    { icon: Wrench, text: 'Expert Technicians', color: 'text-purple-400' }
  ];



  return (
    <>
      <Helmet>
        <title>Our Services - {COMPANY_INFO.name} Saudi Arabia | Comprehensive Appliance Repair</title>
        <meta name="description" content="Complete appliance repair services in Saudi Arabia. AC installation, washing machine repair, refrigerator service, and more. All major brands covered with warranty." />
        <meta name="keywords" content="appliance repair services, AC installation Saudi Arabia, washing machine repair, refrigerator service, dishwasher repair, microwave repair" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <PageHeader
          title="Our Services"
          highlightedWord="Services"
          subtitle="خدمات شاملة لإصلاح وصيانة الأجهزة المنزلية لتلبية جميع احتياجات منزلك."
          badges={headerBadges}
        />

        {/* Services Grid */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Brands We Service */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Brands We Service</h2>
            <p className="text-xl text-purple-200 mb-12">
              We work with all major appliance brands and models
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {SUPPORTED_BRANDS.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-white font-semibold">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service */}
        <EmergencySection
          description="Appliance breakdown at odd hours? Don't worry! Our emergency service team is available 24/7 to help you get back to normal life."
        />

        {/* Service Process */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-xl text-purple-200">Simple and transparent process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Book Service</h3>
                <p className="text-purple-200">Call us or book online for your repair needs</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Diagnosis</h3>
                <p className="text-purple-200">Expert technician diagnoses the problem</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Repair</h3>
                <p className="text-purple-200">Professional repair with quality parts</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Warranty</h3>
                <p className="text-purple-200">1-month warranty on all repairs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;