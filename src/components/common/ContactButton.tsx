import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  href: string;
  icon: LucideIcon;
  text: string;
  variant?: 'primary' | 'secondary' | 'emergency' | 'whatsapp';
  target?: string;
  rel?: string;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  icon: Icon,
  text,
  variant = 'primary',
  target,
  rel,
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'emergency':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'whatsapp':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'secondary':
        return 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white';
      default:
        return 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white';
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${getVariantClasses()} px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
};

export default ContactButton;