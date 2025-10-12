import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  highlightedWord?: string;
  badges?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    color?: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  highlightedWord,
  badges = []
}) => {
  const renderTitle = () => {
    if (highlightedWord) {
      const parts = title.split(highlightedWord);
      return (
        <>
          {parts[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            {highlightedWord}
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {renderTitle()}
        </h1>
        {subtitle && (
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2"
              >
                <badge.icon className={`w-5 h-5 ${badge.color || 'text-green-400'}`} />
                <span className="text-white">{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;