import Link from "next/link";
import HomeBanner from "./HomeBanner";
import React, { useState } from "react";
import AdBanner from "../Adsense/AdBanner";

const Footer = () => {
  const closeBanner = () => {
    setHomeBanner(<></>);
  };
  const [homeBanner, setHomeBanner] = useState(
    <HomeBanner closeBanner={closeBanner} />
  );
  return (
    <>
      <div>
        <AdBanner />
        <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[65%] sm:text-[100%]">
          Made with ❤ by &nbsp;
          <Link href="">
            <a
              target="_blank"
              className="font-bold text-[#9C1A8B]"
              onClick={() => window.location.reload()}
            >
              The Skypedia
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default Footer;
