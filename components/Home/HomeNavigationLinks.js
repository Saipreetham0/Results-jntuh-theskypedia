import { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Qrcode from "../ui/Qrcode";
import Telegram from "../ui/Telegram";
import AdBanner from "../Adsense/AdBanner";
import Image from "next/image";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartBarIcon,
  ClipboardDocumentListIcon
} from "@heroicons/react/24/outline";

const HomeNavLinks = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle the link click and show the modal
  const handleLinkClick = () => {
    setModalVisible(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const links = [
    {
      icon: <ChartBarSquareIcon class="w-6 h-6" />,
      route: "/consolidated-result",
      desctiption: [
        "Consolidated Results",
        "Access All Your Semester Results in One Place",
      ],
    },
    {
      icon: <DocumentChartBarIcon class="w-6 h-6" />,
      route: "/sem-results",
      desctiption: [
        "View Semester-wise Results",
        "Access Results for Specific Semesters",
      ],
    },
    // {
    //   route: '/Classresults',
    //   desctiption: [
    //     'Get Class Results',
    //     'Class Results Of A Particular Semester',
    //   ],
    // },
    // {
    //   route: '/Classmate',
    //   desctiption: [
    //     'Classmate Results',
    //     'Get Results Status Of A Particular Semester',
    //   ],
    // },
    {
      icon: <ChartPieIcon class="w-6 h-6" />,
      route: "/cgpa-calculator",
      desctiption: [
        "Calculate Your CGPA",
        "Calculate Your Cumulative GPA and Detailed Result Performance        ",
      ],
    },
    {
      icon: <ClipboardDocumentCheckIcon class="w-6 h-6" />,
      route: "/credits-calculator",
      desctiption: [
        "Credit Eligibility Check",
        "Verify Your Eligibility for Course Credits Here        ",
      ],
    },
    {
      icon: <PresentationChartBarIcon class="w-6 h-6" />,
      route: "/comparison-mode",
      desctiption: [
        "Compare Performance",
        "Compare Your Overall Performance with Classmates        ",
      ],
    },
    {
      icon: <ClipboardDocumentListIcon class="w-6 h-6" />,
      route: "/check-backlogs",

      desctiption: [
        "Check Backlogs",
        "View Your Complete List of Pending Courses      ",
      ],
    },
    // {
    //   route: '/Subjectsratio',
    //   desctiption: [
    //     'Subjects Stats',
    //     'Class Peformance Subjects Stats For Particular Semester ',
    //   ],
    // },
    // {
    //   route: "/Classmatecgpa",
    //   desctiption: [
    //     "Classmate CPGA",
    //     "Check the Overall CGPA of Your Classmates",
    //   ],
    // },
    {
      icon: <BellIcon class="w-6 h-6" />,
      route: "/jntuh-notifications",
      desctiption: [
        "Notifications",
        "Stay Updated with the Latest Notifications from JNTUH        ",
      ],
    },

    {
      icon: <ChatBubbleLeftIcon class="w-6 h-6" />,
      route: "/help",
      desctiption: [
        "Help Desk",
        "Encountered any Issues or Bugs? Report Them Here        ",
      ],
    },
  ];
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      <br />
      <h1 className="title font-bold dark:text-white">
        Welcome to The Skypedia{" "}
        <a
          className="text-blue-400 hover:text-blue-600 "
          href="/"
          target="_blank"
          rel="noreferrer"
          onClick={() => window.location.reload()}
        >
          JNTUH Results
        </a>
      </h1>
      {/* <h2>
        <a href="https://theskypedia.com">The Skypedia</a>
      </h2> */}
      {/* <meta
        name="description"
        content="Access all your semester results in one place. Calculate your CGPA and verify credit eligibility. Stay updated with notifications from JNTUH. Report issues at our help desk."
        key="desc"
      /> */}
      <meta
        name="description"
        content="Access all your semester results in one place. Calculate your CGPA and verify credit eligibility. Stay updated with notifications from JNTUH. Report issues at our help desk."
        key="desc"
      />
      <meta
        name="keywords"
        content="Semester results, CGPA calculator, credit eligibility, performance comparison, pending courses, JNTUH notifications, help desk support, consolidated results, semester-wise results, cumulative GPA, credit verification, performance comparison, backlogs check, latest notifications, technical assistance, LMS The Skypedia, The Skypedia, skypedia"
      />

      <div className="description">
        {/* Examination Results Portal */}
        A web portal for examination results
        <br />
        <div class="flex flex-row items-center justify-center dark:text-white">
          <Image src="/jntuh.png" alt="Jntuh Logo" width={100} height={100} />
          <code className="code dark:bg-gray-800 dark:text-white">
            Jawaharlal Nehru Technological University Hyderabad
          </code>
        </div>
      </div>
      <p className="home-header-caption text-black text-base sm:text-xl mt-1 block text-left mx-[12%] text-center mb-4 text-[65%] sm:text-[100%] dark:text-white">
        Get all your results in one place.{" "}
        <i>
          {/* Just your <b>hallticket</b>, to rule them all. */}
          One place for all your results. All you need is your{" "}
          <b>hallticket </b>.
        </i>
      </p>

      <AdBanner />
      <div className="home-links flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {links.map((link, idx) =>
          // Check if the link route is '/Classmatecgpa' and the current time is between 6 PM and 12 AM (midnight)
          // If true, render the link
          link.route === "/Classmatecgpa" &&
          (new Date().getHours() >= 5 || new Date().getHours() < 0) ? null : (
            <a
              href={link.route}
              key={idx}
              className="border border-gray-100 hover:drop-shadow-sm group text-black shadow-2xl max-w-xs p-6 mt-6 text-left md:w-96 rounded-xl hover:border-gray-500 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:bg-blue-300 duration-300  dark:text-white dark:bg-blue-800"
              onMouseEnter={() => setHoveredLink(idx)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div class="flex flex-row items-center">
                {/* {link.icon} */}

                <h3 className="group-hover:text-black text-lg sm:text-2xl font-bold">
                  <div className="flex flex-row items-center justify-start">
                    <span className="p-1 ">{link.desctiption[0]}</span>
                    {hoveredLink === idx && <HiArrowRight />}
                  </div>
                </h3>
              </div>
              <p className="group-hover:text-black text-slate-500 mt-4 text-base sm:text-xl dark:text-gray-300">
                {link.desctiption[1]}
              </p>
            </a>
          )
        )}
      </div>
      <br />
      <hr className="w-full border-gray" />
      <br />
      {/* Footer */}
      <p className="mt-1 block text-left mx-[12%] text-center text-[65%] sm:text-[100%]">
        Made with ❤ by &nbsp;
        <Link href="https://theskypedia.com">
          <a
            target="_blank"
            className="font-bold text-[#9C1A8B]"
            onClick={() => window.location.reload()}
          >
            THESKYPEDIA
          </a>
        </Link>
      </p>

      <Telegram />
      <br />
      {/* Footer */}
      <footer className="bottom-0 opacity-50">
        <div className="md:h-8 ">
          <div className=" md:px-0">
            <p className="text-center text-sm sm:text-[100%]">Thanks &nbsp;</p>
            <p className="text-center text-[67%] sm:text-[100%] ">
              <a
                href="https://github.com/thilakreddyy"
                target="_blank"
                rel="noreferrer"
              >
                Thilak Reddy&nbsp;,&nbsp;
              </a>
              <a
                href="https://github.com/hemanth-kotagiri"
                target="_blank"
                rel="noreferrer"
              >
                Hemanth Kotagiri&nbsp;
              </a>
              &&nbsp;
              <a
                href="https://github.com/Syed-Ansar"
                target="_blank"
                rel="noreferrer"
              >
                Syed Ansar
              </a>
            </p>
          </div>
        </div>
      </footer>
      <br />
    </>
  );
};
export default HomeNavLinks;
