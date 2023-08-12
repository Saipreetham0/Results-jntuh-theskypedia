// components/LoadingAd.js
import React, { useEffect } from 'react';

const LoadingAd = ({ adClient, adSlot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ads-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default LoadingAd;
