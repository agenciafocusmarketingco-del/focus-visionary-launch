import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentimento = localStorage.getItem('consentimento');
    if (consentimento !== 'aceito') {
      setShowBanner(true);
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem('consentimento', 'aceito');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      id="banner-consent"
      className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t border-border z-[9999] text-center shadow-lg"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-sm text-foreground">
          Usamos cookies para melhorar sua experiência e analisar o tráfego do site.
        </p>
        <button 
          onClick={aceitarCookies}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Aceitar Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;