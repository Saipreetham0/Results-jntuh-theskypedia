import { useState, useEffect } from "react";
import Link from "next/link";
// import AdBanner from "../Adsense/AdBanner";
import LoadingAd from "../Adsense/loadingAd";
// import { FaTelegram, FontAwesomeIcon } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Blog",
    },
  ];
  return (
    // <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 dark:bg-gray-800">
    //   <div class=" flex  justify-center ">
    //     <LoadingAd adSlot="8973292958" />
    //   </div>
    //   <div className="max-w-lg sm:mx-auto sm:text-center">
    //     {/* <img src="https://www.floatui.com/logo.svg" className="w-32 sm:mx-auto" /> */}
    //     <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
    //       The Skypedia
    //     </h2>
    //     <p className="leading-relaxed mt-2 text-[15px]"></p>
    //   </div>
    //   <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
    //     {footerNavs.map((item, idx) => (
    //       <li key={idx} className="hover:text-gray-800">
    //         <a href={item.href}>{item.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    //   <div className="mt-8 items-center justify-between sm:flex">
    //     <div className="mt-4 sm:mt-0">&copy; 2023 The Skypedia</div>
    //     <div className="mt-6 sm:mt-0">
    //       <ul className="flex items-center space-x-4">
    //         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
    //           <Link href="/" legacyBehavior>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6 text-pink-500"
    //               viewBox="0 0 448 512"
    //               aria-hidden="true"
    //               focusable="false"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    //               />
    //             </svg>
    //           </Link>
    //         </li>
    //         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
    //           <Link href="/" legacyBehavior>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6 text-blue-500"
    //               viewBox="0 0 448 512"
    //               aria-hidden="true"
    //               focusable="false"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    //               />
    //             </svg>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //
    // </footer>

    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class=" flex  justify-center ">
        <LoadingAd adSlot="8973292958" />
      </div>

      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="hover:underline">
            JNTUH Result - The Skypedia
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>

          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
