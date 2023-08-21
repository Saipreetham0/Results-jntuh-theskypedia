import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Nav1 from "./Nav1";
import ThemeButton from "../Theme";
const NavBarComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const handleTouchStart = (event) => {
      setStartX(event.touches[0].clientX);
    };

    const handleTouchEnd = (event) => {
      const endX = event.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (deltaX > 50 && !showPopup) {
        setShowPopup(true); // Swipe right to open the menu
      } else if (deltaX < -50 && showPopup) {
        setShowPopup(false); // Swipe left to close the menu
      }
    };

    const handleMenu = (event) => {
      if (
        event.target.closest(".menu-icon") ||
        event.target.closest(".menu-container")
      ) {
        setShowPopup((prevState) => !prevState);
      } else {
        setShowPopup(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleMenu);
    };
  }, [showPopup, startX]);

  return (
    <>
      {showPopup && <Nav1 />}
      <nav className="nav shadow-xl h-16 flex items-center px-4 lg:p-8 border-b-[0.1px] sticky dark:bg-gray-800">
        <h1 className="text-md font-bold md:text-lg lg:text-2xl flex-1 text-[#020E24] mt-1">
          <Link href="/">
            {/* <a>
              <Image src="/logo.png" alt="Logo" width={70} height={50} />
            </a> */}

            <spam class="text-1xl dark:text-white">JNTUH Results</spam>
            {/* <spam>The Skypedia</spam> */}
          </Link>
        </h1>
        <div className="flex items-center space-x-4 md:space-x-8">
          <ThemeButton />
          <Bars3BottomLeftIcon class="w-6 h-6 cursor-pointer menu-icon" />
          {/* <Icon
            icon={menu2Fill}
            className="w-7 h-7 menu-icon"
            style={{ cursor: "pointer" }}
          /> */}
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;

