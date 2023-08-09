import Link from "next/link";
import React, { useState } from "react";
import Qrcode from "../ui/Qrcode";

const HomeFooter = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle the link click and show the modal
  const handleLinkClick = () => {
    setModalVisible(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <p className="mt-1 block text-left mx-[12%] text-center mb-4 text-[65%] sm:text-[100%]">
        Made with ❤ by &nbsp;
        <Link href="/">
          <a target="_blank" className="font-bold text-[#9C1A8B]">
            Theskypedia
          </a>
        </Link>
      </p>
    </>
  );
};
export default HomeFooter;
