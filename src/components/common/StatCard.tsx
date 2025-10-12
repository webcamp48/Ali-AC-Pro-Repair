import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 ${className}`}>
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-purple-200">{label}</div>
    </div>
  );
};

export default StatCard;