import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ThumbsUp, Calendar, MapPin, User, Filter, TrendingUp } from 'lucide-react';
import { generatePhoneUrl } from '../utils/helpers';
import { COMPANY_INFO, CONTACT_INFO } from '../constants';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      location: 'Riyadh, Al-Malaz',
      rating: 5,
      date: '2024-02-15',
      service: 'AC Repair',
      review: 'Excellent service! The technician arrived on time and fixed my AC perfectly. Very professional and knowledgeable. The cooling is now better than before. Highly recommended!',
      technician: 'Mohammed Al-Ghamdi',
      verified: true,
      helpful: 24,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      location: 'Jeddah, Al-Hamra',
      rating: 4,
      date: '2024-02-10',
      service: 'Washing Machine Repair',
      review: 'Amazing work! My washing machine was completely dead, but they brought it back to life. The technician was very patient and explained everything clearly. Great value for money!',
      technician: 'Omar Al-Khalil',
      verified: true,
      helpful: 18,
      beforeImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Mohammed Al-Ghamdi',
      location: 'Dammam, Al-Faisaliyah',
      rating: 5,
      date: '2024-02-08',
      service: 'AC Installation',
      review: 'خدمة تركيب ممتازة! قاموا بتركيب ٣ وحدات تكييف في فيلتي. عمل نظيف، توصيلات كهربائية سليمة، وأداء تبريد ممتاز. كان الفريق محترفًا للغاية',
      technician: 'Ahmed Al-Rashid',
      verified: true,
      helpful: 31,
      beforeImage: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'Sara Al-Mansouri',
      location: 'Riyadh, Al-Olaya',
      rating: 5,
      date: '2024-02-05',
      service: 'Refrigerator Repair',
      review: 'Outstanding service! My refrigerator was not cooling properly. The technician diagnosed the problem quickly and fixed it with genuine parts. Now it works perfectly!',
      technician: 'Khalid Al-Mansouri',
      verified: true,
      helpful: 15,
      beforeImage: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'Omar Al-Khalil',
      location: 'Mecca, Al-Aziziyah',
      rating: 5,
      date: '2024-02-01',
      service: 'Emergency AC Repair',
      review: 'اتصلتُ بهم منتصف الليل لإصلاح مكيف هواء طارئ. وصلوا خلال ساعتين وأصلحوا المشكلة. خدمة طوارئ ممتازة! ممتنّون جدًا لسرعة استجابتهم',
      technician: 'Faisal Al-Zahra',
      verified: true,
      helpful: 27,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      name: 'Khalid Al-Otaibi',
      location: 'Medina, Quba',
      rating: 4,
      date: '2024-01-28',
      service: 'AC Maintenance',
      review: 'Good maintenance service. The technician cleaned the AC thoroughly and replaced the filters. The cooling improved significantly. Professional and punctual service.',
      technician: 'Saeed Al-Otaibi',
      verified: true,
      helpful: 12,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 7,
      name: 'Nora Al-Fahad',
      location: 'Riyadh, King Fahd District',
      rating: 5,
      date: '2024-01-25',
      service: 'Washing Machine Repair',
      review: 'Excellent repair work! My washing machine drum was making noise. They replaced the bearings and now it runs silently. Very satisfied with the service quality.',
      technician: 'Mohammed Al-Ghamdi',
      verified: true,
      helpful: 19,
      beforeImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/4239096/pexels-photo-4239096.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 8,
      name: 'Abdullah Al-Harbi',
      location: 'Jeddah, Al-Zahra',
      rating: 5,
      date: '2024-01-20',
      service: 'Commercial AC Service',
      review: 'قمنا بصيانة ١٥ وحدة تكييف في مبنى مكاتبنا. فريق عمل محترف للغاية، أنجز العمل بكفاءة عالية دون أي خلل في أعمالنا. نوصي به بشدة للخدمات التجارية',
      technician: 'Ahmed Al-Rashid',
      verified: true,
      helpful: 35,
      beforeImage: 'https://images.pexels.com/photos/8835261/pexels-photo-8835261.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/221127/pexels-photo-221127.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const ratingStats = [
    { stars: 5, count: 847, percentage: 92 },
    { stars: 4, count: 58, percentage: 6 },
    { stars: 3, count: 12, percentage: 1 },
    { stars: 2, count: 5, percentage: 1 },
    { stars: 1, count: 3, percentage: 0 }
  ];

  const serviceStats = [
    { service: 'AC Repair', count: 425, rating: 4.9 },
    { service: 'AC Installation', count: 287, rating: 4.9 },
    { service: 'Washing Machine', count: 198, rating: 4.8 },
    { service: 'Refrigerator', count: 156, rating: 4.9 },
    { service: 'Emergency Service', count: 89, rating: 5.0 },
    { service: 'Maintenance', count: 145, rating: 4.8 }
  ];

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const serviceMatch = selectedService === 'all' || review.service.toLowerCase().includes(selectedService.toLowerCase());
    return ratingMatch && serviceMatch;
  });

  const averageRating = 4.9;
  const totalReviews = 925;

  return (
    <>
      <Helmet>
        <title>Customer Reviews - {COMPANY_INFO.name} {COMPANY_INFO.tagline} | 5-Star Rated Service</title>
        <meta name="description" content={`Read genuine customer reviews and testimonials for ${COMPANY_INFO.name} Saudi Arabia. 4.9-star rating with 900+ verified reviews from satisfied customers.`} />
        <meta name="keywords" content="AC repair reviews Saudi Arabia, customer testimonials, appliance repair ratings, verified reviews, customer feedback" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Reviews</span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              اقرأ ما يقوله عملاؤنا الراضون عن خدمات إصلاح مكيفات الهواء والغسالات لدينا
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white">{averageRating} Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <User className="w-5 h-5 text-green-400" />
                <span className="text-white">{totalReviews}+ Reviews</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white">92% Five Stars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Overview */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Rating Breakdown */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Rating Breakdown</h2>
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-white mb-2">{averageRating}</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-200">Based on {totalReviews} reviews</p>
                </div>
                <div className="space-y-4">
                  {ratingStats.map((stat) => (
                    <div key={stat.stars} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-white">{stat.stars}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-white/10 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full"
                          style={{ width: `${stat.percentage}%` }}
                        />
                      </div>
                      <span className="text-white w-12 text-right">{stat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Ratings */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Service Ratings</h2>
                <div className="space-y-6">
                  {serviceStats.map((service, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-semibold">{service.service}</h3>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm">{service.count} reviews</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-bold text-white">Filter Reviews</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:border-purple-400 focus:outline-none"
              >
                <option value="all" className="bg-gray-800">All Ratings</option>
                <option value="5" className="bg-gray-800">5 Stars</option>
                <option value="4" className="bg-gray-800">4 Stars</option>
                <option value="3" className="bg-gray-800">3 Stars</option>
                <option value="2" className="bg-gray-800">2 Stars</option>
                <option value="1" className="bg-gray-800">1 Star</option>
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:border-purple-400 focus:outline-none"
              >
                <option value="all" className="bg-gray-800">All Services</option>
                <option value="ac repair" className="bg-gray-800">AC Repair</option>
                <option value="ac installation" className="bg-gray-800">AC Installation</option>
                <option value="washing machine" className="bg-gray-800">Washing Machine</option>
                <option value="refrigerator" className="bg-gray-800">Refrigerator</option>
                <option value="emergency" className="bg-gray-800">Emergency Service</option>
                <option value="maintenance" className="bg-gray-800">Maintenance</option>
              </select>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold flex items-center space-x-2">
                          <span>{review.name}</span>
                          {review.verified && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                          )}
                        </h3>
                        <div className="flex items-center space-x-2 text-purple-200 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-purple-200 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {review.service}
                    </span>
                  </div>

                  <p className="text-purple-200 mb-4 leading-relaxed">{review.review}</p>

                  {review.beforeImage && review.afterImage && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-white text-sm font-semibold mb-2">Before</p>
                        <img
                          src={review.beforeImage}
                          alt="Before"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold mb-2">After</p>
                        <img
                          src={review.afterImage}
                          alt="After"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-purple-200 text-sm">
                      <span>Technician: </span>
                      <span className="text-white font-semibold">{review.technician}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-200 text-sm">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.helpful} found helpful</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews Integration */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us on Google Reviews</h2>
            <p className="text-xl text-purple-200 mb-8">
              Check out more reviews and leave your own feedback on Google
            </p>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-6xl">⭐</div>
                <div>
                  <div className="text-4xl font-bold text-white">{averageRating}</div>
                  <div className="text-purple-200">Google Rating</div>
                </div>
              </div>
              <p className="text-purple-200 mb-6">
                Based on {totalReviews}+ verified Google reviews from real customers
              </p>
              <a
                href="https://www.google.com/search?q=AC+Pro+Repair+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                View Google Reviews
              </a>
            </div>
          </div>
        </section>

        {/* Leave Review CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Had a great experience with our service? We'd love to hear from you! 
              Your feedback helps us improve and helps others make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/search?q=AC+Pro+Repair+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Leave Google Review
              </a>
              <a
                href={generatePhoneUrl(CONTACT_INFO.phone)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Book Service Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;