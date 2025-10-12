import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '../../constants';
import ContactButton from './ContactButton';
import { generatePhoneUrl, generateWhatsAppUrl } from '../../utils/helpers';

interface EmergencySectionProps {
  title?: string;
  description?: string;
  showWhatsApp?: boolean;
}

const EmergencySection: React.FC<EmergencySectionProps> = ({
  title = 'خدمة الطوارئ متاحة',
  description = 'Need immediate help? Our emergency team is available 24/7 for urgent repairs',
  showWhatsApp = true
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-red-200 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactButton
            href={generatePhoneUrl(CONTACT_INFO.phone)}
            icon={Phone}
            text={`Emergency: ${CONTACT_INFO.phone}`}
            variant="secondary"
            className="bg-white text-red-600 hover:bg-red-50"
          />
          {showWhatsApp && (
            <ContactButton
              href={generateWhatsAppUrl(WHATSAPP_MESSAGES.emergency)}
              icon={MessageCircle}
              text="WhatsApp Emergency"
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;