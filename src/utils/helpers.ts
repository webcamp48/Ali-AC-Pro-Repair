import { COMPANY_INFO, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';

// Generate WhatsApp URL with custom message
export const generateWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.general): string => {
  const fullMessage = `${message}\n\n🏪 ${COMPANY_INFO.name}.\n📍 ${CONTACT_INFO.address}`;
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
};

// Generate phone URL
export const generatePhoneUrl = (phone: string = CONTACT_INFO.phone): string => {
  return `tel:${phone}`;
};

const EMAIL_SUBJECT = "AC Pro Repair Inquiry";
// Generate Email URL
export const generateEmailUrl = (email: string = CONTACT_INFO.email): string => {
  return `mailto:${email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
};

// Format date
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};


// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Validate phone number (Saudi format)
export const validateSaudiPhone = (phone: string): boolean => {
  const saudiPhoneRegex = /^(\+966|966|0)?[5][0-9]{8}$/;
  return saudiPhoneRegex.test(phone.replace(/\s/g, ''));
};

// Validate email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Get service category color
export const getServiceCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'ac-services': 'from-blue-500 to-blue-600',
    'washing-machine': 'from-green-500 to-green-600',
    'refrigerator': 'from-purple-500 to-purple-600',
    'emergency': 'from-red-500 to-red-600',
    'maintenance': 'from-yellow-500 to-yellow-600'
  };
  return colors[category] || 'from-purple-500 to-indigo-600';
};