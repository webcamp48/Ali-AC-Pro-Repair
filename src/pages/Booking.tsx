import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MapPin, Wrench } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO } from '../constants';
import { generatePhoneUrl, generateWhatsAppUrl } from '../utils/helpers';

const Booking = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { value: 'ac-repair', label: 'AC Repair', labelArabic: 'إصلاح المكيف', price: 150 },
    { value: 'ac-installation', label: 'AC Installation', labelArabic: 'تركيب المكيف', price: 300 },
    { value: 'ac-maintenance', label: 'AC Maintenance', labelArabic: 'صيانة المكيف', price: 120 },
    { value: 'washing-machine-repair', label: 'Washing Machine Repair', labelArabic: 'إصلاح غسالة الملابس', price: 140 },
    { value: 'refrigerator-repair', label: 'Refrigerator Repair', labelArabic: 'إصلاح الثلاجة', price: 180 },
    { value: 'dryer-repair', label: 'Dryer Repair', labelArabic: 'إصلاح المجفف', price: 100 },
    { value: 'dishwasher-repair', label: 'Dishwasher Repair', labelArabic: 'إصلاح غسالة الأطباق', price: 130 },
    { value: 'microwave-repair', label: 'Microwave Repair', labelArabic: 'إصلاح الميكروويف', price: 80 }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const priorities = [
    { value: 'normal', label: 'Normal Service', labelArabic: 'خدمة عادية' },
    { value: 'urgent', label: 'Urgent Service (+50 SAR)', labelArabic: 'خدمة عاجلة (+50 ريال)' },
    { value: 'emergency', label: 'Emergency Service (+100 SAR)', labelArabic: 'خدمة طارئة (+100 ريال)' }
  ];

  const cities = [
    { value: 'riyadh', label: 'Riyadh', labelArabic: 'الرياض' },
    { value: 'jeddah', label: 'Jeddah', labelArabic: 'جدة' },
    { value: 'mecca', label: 'Mecca', labelArabic: 'مكة' },
    { value: 'medina', label: 'Medina', labelArabic: 'المدينة' },
    { value: 'dammam', label: 'Dammam', labelArabic: 'الدمام' },
    { value: 'khobar', label: 'Khobar', labelArabic: 'الخبر' },
    { value: 'tabuk', label: 'Tabuk', labelArabic: 'تبوك' }
  ];

  const onSubmit = (data: any) => {
    console.log('Booking Data:', data);
    // Here you would typically send the data to your backend
    alert('Booking submitted successfully! We will contact you soon.');
  };

  const selectedServiceData = services.find(s => s.value === selectedService);
  const watchedPriority = watch('priority');
  
  const calculateTotal = () => {
    let total = selectedServiceData ? selectedServiceData.price : 0;
    if (watchedPriority === 'urgent') total += 50;
    if (watchedPriority === 'emergency') total += 100;
    return total;
  };

  return (
    <>
      <Helmet>
        <title>Book Service - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | Online Appointment Booking</title>
        <meta name="description" content="Book your AC or washing machine repair service online. Choose your preferred time slot, service type, and get instant confirmation. 24/7 emergency booking available." />
        <meta name="keywords" content={`book AC repair, online booking ${CONTACT_INFO.address}, appointment scheduling, appliance repair booking, emergency service booking`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Service</span>
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              جدول خدمة إصلاح الأجهزة المنزلية في الوقت الذي يناسبك
            </p>
          </div>
        </section>

        <section className="py-12 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                {/* Service Selection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Wrench className="w-6 h-6 mr-2" />
                    Select Service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label
                        key={service.value}
                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedService === service.value
                            ? 'border-purple-400 bg-purple-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div>
                          <input
                            type="radio"
                            {...register('service', { required: 'Please select a service' })}
                            value={service.value}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="sr-only"
                          />
                          <div>
                            <span className="text-white font-medium block">{service.label}</span>
                            <span className="text-purple-300 text-sm font-arabic">{service.labelArabic}</span>
                          </div>
                        </div>
                        <span className="text-purple-200 font-semibold">SAR {service.price}</span>
                      </label>
                    ))}
                  </div>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-2">{errors.service.message as string}</p>
                  )}
                </div>

                {/* Date & Time Selection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    Select Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Preferred Date</label>
                      <input
                        type="date"
                        {...register('date', { required: 'Please select a date' })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                      {errors.date && (
                        <p className="text-red-400 text-sm mt-1">{errors.date.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Preferred Time</label>
                      <select
                        {...register('time', { required: 'Please select a time slot' })}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                        onChange={(e) => setSelectedTime(e.target.value)}
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-gray-800">
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-400 text-sm mt-1">{errors.time.message as string}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Priority Selection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Service Priority
                  </h2>
                  <div className="space-y-3">
                    {priorities.map((priority) => (
                      <label
                        key={priority.value}
                        className="flex items-center p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          {...register('priority', { required: 'Please select service priority' })}
                          value={priority.value}
                          className="text-purple-500 mr-3"
                        />
                        <span className="text-white font-medium">{priority.label}</span>
                        <p className="text-purple-300 text-sm font-arabic ml-2">{priority.labelArabic}</p>
                      </label>
                    ))}
                    
                  </div>
                  {errors.priority && (
                    <p className="text-red-400 text-sm mt-2">{errors.priority.message as string}</p>
                  )}
                </div>

                {/* Customer Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <User className="w-6 h-6 mr-2" />
                    Customer Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        {...register('name', { required: 'Full name is required' })}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="Enter your full name"
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
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">WhatsApp Number</label>
                      <input
                        type="tel"
                        {...register('whatsapp')}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="+966 xxx xxx xxx"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Service Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">City *</label>
                      <select
                        {...register('city', { required: 'Please select your city' })}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-purple-400 focus:outline-none"
                      >
                        <option value="">Select City</option>
                        <option value="riyadh" className="bg-gray-800">Riyadh</option>
                        <option value="jeddah" className="bg-gray-800">Jeddah</option>
                        <option value="mecca" className="bg-gray-800">Mecca</option>
                        <option value="medina" className="bg-gray-800">Medina</option>
                        <option value="dammam" className="bg-gray-800">Dammam</option>
                        <option value="khobar" className="bg-gray-800">Khobar</option>
                        <option value="tabuk" className="bg-gray-800">Tabuk</option>
                      </select>
                      {errors.city && (
                        <p className="text-red-400 text-sm mt-1">{errors.city.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">District</label>
                      <input
                        type="text"
                        {...register('district')}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none"
                        placeholder="Enter district name"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-white font-medium mb-2">Full Address *</label>
                    <textarea
                      {...register('address', { required: 'Full address is required' })}
                      rows={3}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none resize-none"
                      placeholder="Enter complete address with building name, floor, apartment number"
                    />
                    {errors.address && (
                      <p className="text-red-400 text-sm mt-1">{errors.address.message as string}</p>
                    )}
                  </div>
                </div>

                {/* Problem Description */}
                <div className="mb-8">
                  <label className="block text-white font-medium mb-2">Problem Description</label>
                  <textarea
                    {...register('problem')}
                    rows={4}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-purple-400 focus:outline-none resize-none"
                    placeholder="Describe the problem with your appliance (optional but helps us prepare better)"
                  />
                </div>

                {/* Price Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">Service Summary</h3>
                  <div className="space-y-2">
                    {selectedServiceData && (
                      <div className="flex justify-between text-white">
                        <span>{selectedServiceData.label}</span>
                        <span>SAR {selectedServiceData.price}</span>
                      </div>
                    )}
                    {watchedPriority === 'urgent' && (
                      <div className="flex justify-between text-orange-300">
                        <span>Urgent Service Fee</span>
                        <span>SAR 50</span>
                      </div>
                    )}
                    {watchedPriority === 'emergency' && (
                      <div className="flex justify-between text-red-300">
                        <span>Emergency Service Fee</span>
                        <span>SAR 100</span>
                      </div>
                    )}
                    <div className="border-t border-white/20 pt-2 mt-2">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total Estimated Cost</span>
                        <span>SAR {calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  Book Service Now
                </button>

                <p className="text-purple-200 text-sm text-center mt-4">
                  * Final price may vary based on actual diagnosis and parts required
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">هل تحتاج إلى خدمة فورية؟</h2>
            <p className="text-red-200 mb-6">
              For urgent repairs that can't wait, call our emergency hotline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Emergency: {CONTACT_INFO.phone}
              </a>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
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

export default Booking;