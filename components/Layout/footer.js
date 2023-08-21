import { useState, useEffect } from "react";
import Link from "next/link";
// import AdBanner from "../Adsense/AdBanner";
import LoadingAd from "../Adsense/loadingAd";
const Footer = () => {
  return (
    <>
    <div>
       {/* <AdBanner /> */}
       <LoadingAd adSlot="8973292958"/>

      <div className="flex justify-center text-center m-2 text-xs	 text-black-1600  font-bold my-6">

        <p>
          Copyright &copy; 2023
          <br /> <Link href="https://theskypedia.com"> The Skypedia</Link>
        </p>
      </div>
      </div>
    </>
  );
};
export default Footer;
