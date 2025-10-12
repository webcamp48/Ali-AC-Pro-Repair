import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  titleArabic: string;
  description: string;
  descriptionArabic: string;
  features: string[];
  image: string;
  price: string;
  priceArabic: string;
  linkTo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  titleArabic,
  description,
  descriptionArabic,
  features,
  image,
  price,
  priceArabic,
  linkTo = '/booking'
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <h4 className="text-lg font-bold text-purple-300 mb-3 font-arabic">{titleArabic}</h4>
        <p className="text-purple-200 mb-2">{description}</p>
        <p className="text-purple-300 text-sm font-arabic mb-4">{descriptionArabic}</p>
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Services Include:</h4>
          <ul className="space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-purple-200 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-bold block">{price}</span>
            <span className="text-purple-300 text-sm font-arabic">{priceArabic}</span>
          </div>
          <Link
            to={linkTo}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;