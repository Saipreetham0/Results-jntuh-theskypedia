// components/LoadingAd.js
import React, { useEffect } from 'react';

const LoadingAd = ({  adSlot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ads-container">
      <ins
        className="adsbygoogle"
              style={{ display: 'inline-block', width: '728px', height: '90px' }}

        data-ad-client="ca-pub-4870864326886980"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default LoadingAd;
