import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/helpers';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white/10 border border-white/20 rounded-2xl p-4 max-w-sm">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-white font-semibold">Need Help?</h4>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-purple-200 text-sm mb-3">
            Get instant support for your AC and washing machine repairs. 
            Chat with our experts now!
          </p>
          <button
            onClick={() => window.open(generateWhatsAppUrl())}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start WhatsApp Chat</span>
          </button>
        </div>
      )}

      <div className="flex flex-col items-end space-y-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;