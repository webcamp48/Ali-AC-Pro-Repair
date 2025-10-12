import React from 'react';
import { Star, Calendar, MapPin, User, ThumbsUp } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  review: string;
  technician: string;
  verified?: boolean;
  helpful?: number;
  beforeImage?: string;
  afterImage?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  location,
  rating,
  date,
  service,
  review,
  technician,
  verified = false,
  helpful = 0,
  beforeImage,
  afterImage
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold flex items-center space-x-2">
              <span>{name}</span>
              {verified && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
              )}
            </h3>
            <div className="flex items-center space-x-2 text-purple-200 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex space-x-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center space-x-2 text-purple-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
          {service}
        </span>
      </div>

      <p className="text-purple-200 mb-4 leading-relaxed">{review}</p>

      {beforeImage && afterImage && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-white text-sm font-semibold mb-2">Before</p>
            <img
              src={beforeImage}
              alt="Before"
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-2">After</p>
            <img
              src={afterImage}
              alt="After"
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="text-purple-200 text-sm">
          <span>Technician: </span>
          <span className="text-white font-semibold">{technician}</span>
        </div>
        {helpful > 0 && (
          <div className="flex items-center space-x-2 text-purple-200 text-sm">
            <ThumbsUp className="w-4 h-4" />
            <span>{helpful} found helpful</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;