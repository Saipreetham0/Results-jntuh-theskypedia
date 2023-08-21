// import React from 'react';
// import { Link } from 'react-router-dom';

// const navBarItems = [
//   {
//     id: 0,
//     nav: 'Home',
//     link: '/',
//   },
//   {
//     id: 1,
//     nav: 'R18',
//     link: '/all-r18',
//   },
//   {
//     id: 2,
//     nav: 'Single',
//     link: '/single',
//   },
//   {
//     id: 3,
//     nav: 'Multiple',
//     link: '/multi',
//   },
//   {
//     id: 4,
//     nav: 'Notifications',
//     link: '/notifications',
//   },
//   {
//     id: 5,
//     nav: 'Docs',
//     link: 'https://hemanth-kotagiri.github.io/sgpa-rest-api-docs/',
//     target: '_blank',
//   },
// ];

// const Navbar = () => {
//   return (
//     <div className='flex md:mr-6'>
//       {navBarItems.map((item) => (
//         <Link to={item.link} key={item.id}>
//           <li
//             key={item.id}
//             className='cursor-pointer w-full px-[5px] sm:px[7px] md:px-3 lg:px-5 py-2 md:py-2 text-black dark:text-white hover:text-white md:font-semibold list-none hover:bg-black
//           dark:hover:bg-white dark:hover:text-black hover:rounded-sm text-sm md:text-md md:bg-inherit font-bold'
//           >
//             <a target={item.target && '_blank'} className='md:bg-inherit'>
//               {item.nav}
//             </a>
//           </li>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Navbar;

// layouts/Dashboard1Layout.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "../Theme";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
// import { useSelectedLayoutSegment } from 'next/navigation'
import { RWebShare } from "react-web-share";

import { useRouter } from "next/router";

import {
  MdOutlineSpaceDashboard,
  MdOutlineMoreHoriz,
  MdOutlineLogout,
  MdCreditScore,
  MdCompareArrows,
  MdSubject,
} from "react-icons/md";
import {
  BsListNested,
  BsCardChecklist,
  BsListUl,
  BsCardText,
  BsClipboardData,
} from "react-icons/bs";
import { BiHomeHeart, BiShareAlt } from "react-icons/bi";
import { LuStretchVertical, LuGraduationCap } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { CgNotifications } from "react-icons/cg";
const MenuItems = [
  {
    link: "/consolidated-result",
    icon: <FaUserGraduate className="w-6 h-6" />,
    name: " Consolidated Results",
  },

  {
    link: "/sem-results",
    icon: <BsCardText className="w-6 h-6" />,
    name: "Semester Results",
  },
  // {
  //   link: "/class-results",
  //   icon: <BsListUl className="w-6 h-6" />,
  //   name: "Class Results",
  // },
  {
    link: "/classmate",
    icon: <BsListNested className="w-6 h-6 " />,
    name: "Classmate Results",
  },
  {
    link: "/cgpa-calculator",
    icon: <BsClipboardData className="w-6 h-6" />,
    name: "Get Your CGPA    ",
  },
  {
    link: "/credits-calculator",
    icon: <MdCreditScore className="w-6 h-6" />,
    name: "  Credits Check",
  },
  {
    link: "/comparison-mode",
    icon: <LuStretchVertical className="w-6 h-6" />,
    name: " Results Comparison",
  },
  {
    link: "/check-backlogs",
    icon: <BsCardChecklist className="w-6 h-6" />,
    name: "Check Backlogs",
  },
  {
    link: "/subjects-ratio",
    icon: <MdSubject className="w-6 h-6" />,
    name: "Subjects Stats",
  },

  {
    link: "/jntuh-notifications",
    icon: <CgNotifications className="w-6 h-6" />,
    name: "Notifications",
  },
  {
    link: "/help",
    icon: <MdOutlineMoreHoriz className="w-6 h-6" />,
    name: "More",
  },
];

const Sidebar = () => {
  // const { signOut } = useAuth();
  const router = useRouter(); // Import the useRouter hook

  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar open/closed
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State for user dropdown open/closed

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <div>
      <nav class="fixed shadow-xl top-0 z-50 w-full bg-white border-b border-gray-200   dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start gap-1">
              <button
                // data-drawer-target="logo-sidebar"
                // data-drawer-toggle="logo-sidebar"
                // aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon class="w-6 h-6 cursor-pointer menu-icon" />
              </button>
              <Link href="/" class="flex ml-2 md:mr-24">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" /> */}
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  JNTUH Results
                </span>
              </Link>
            </div>

            <div class="flex ">
              <ThemeButton />
            </div>
          </div>
        </div>
      </nav>

      {/* <aside
        id="logo-sidebar"
        // class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      > */}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          // Hide sidebar on screens larger than small (sm) breakpoint
          ""
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-3 font-medium">
            {MenuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  onClick={toggleSidebar}
                  // className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
                  ${
                    router.pathname === item.link
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                  `}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 font-medium">
            <li>
              {/* <Link
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <a className="flex items-center p-2">
                  <BiShareAlt className="w-6 h-6" />
                  <span class="ml-3">Share</span>
                </a>
              </Link> */}

              {/* <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <BiShareAlt className="w-6 h-6" />
                <span class="ml-3">Share</span>
              </button> */}

              <RWebShare
                data={{
                  // const url = "https://jntuhresults.theskypedia.com";
                  // const title = "JNTUH Results";
                  // const text =
                  //   "Stop your endless search for exam results! Find all your JNTUH exam results conveniently at here. Our user-friendly website provides reliable and accurate results for B.Tech, B.Pharmacy, M.Tech, M.Pharmacy, and MBA. Best of all, it's free! Don't waste time on countless websites – trust us for quick and easy access to your results. Spread the word and let your fellow students know they can find their results here too.";

                  text: "Stop searching for exam results endlessly! Here you can find all your JNTUH exam results conveniently. Using our user-friendly website, you can get accurate and reliable results for B.Tech, B.Pharmacy, M.Tech, and M.Pharmacy. The best part is that it's free! Don't waste time on numerous websites - get your results quickly and easily with us. Share this link with your fellow students so that they can also find their results here. It is part of the Skypedia website",
                  url: "https://jntuhresults.theskypedia.com",
                  title: "JNTUH Results - The Skypedia",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                {/* <button>Share 🔗</button> */}
                <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <BiShareAlt className="w-6 h-6" />
                  <span class="ml-3">Share</span>
                </button>
              </RWebShare>
            </li>
          </ul>

          {/* <div
              className=" my-2"
              onClick={() => {
                const url = "https://jntuhresults.theskypedia.com";
                const title = "JNTUH Results";
                const text =
                  "Stop your endless search for exam results! Find all your JNTUH exam results conveniently at here. Our user-friendly website provides reliable and accurate results for B.Tech, B.Pharmacy, M.Tech, M.Pharmacy, and MBA. Best of all, it's free! Don't waste time on countless websites – trust us for quick and easy access to your results. Spread the word and let your fellow students know they can find their results here too.";
                navigator.share({ url, title, text });
              }}
            >
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiShareAlt className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Share
                </h3>
              </div> */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
