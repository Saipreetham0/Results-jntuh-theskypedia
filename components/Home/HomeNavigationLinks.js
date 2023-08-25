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
  ClipboardDocumentListIcon,
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
      <div className="">
        <br />
        <h1 className="title font-bold dark:text-white">
          Welcome to The Skypedia{" "}
          <a
            // className="text-blue-400 hover:text-blue-600    "
            className="from-sky-600  via-cyan-500 to-blue-500 font-bold bg-gradient-to-r bg-clip-text text-transparent"
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
        <p className="home-header-caption text-black text-base sm:text-xl mt-1 block mx-[12%] text-center mb-4 text-[65%] sm:text-[100%] dark:text-white">
          Get all your results in one place.{" "}
          <i>
            One place for all your results. All you need is your{" "}
            <b>hallticket </b>.
          </i>
        </p>

        <AdBanner />
        <div className="home-links flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {links.map((link, idx) =>
            link.route === "/Classmatecgpa" &&
            (new Date().getHours() >= 5 || new Date().getHours() < 0) ? null : (
              <a
                href={link.route}
                key={idx}
                className="border border-gray-100 hover:drop-shadow-sm group text-black shadow-2xl max-w-xs p-6 mt-6 text-left md:w-96 rounded-xl hover:border-gray-500 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:bg-blue-300 duration-300  dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div class="flex flex-row items-center">
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
        <hr className="w-full border-gray dark:border-gray-700" />
        <br />
        {/* Footer */}
        <p className="mt-1 block  mx-[12%] text-center text-[65%] sm:text-[100%]">
          Made with ❤ by &nbsp;
          <Link href="https://theskypedia.com">
            <a
              target="_blank"
              className="font-bold text-[#9C1A8B]"
              onClick={() => window.location.reload()}
            >
              THE SKYPEDIA
            </a>
          </Link>
        </p>

        <div class="flex justify-center">
          <Telegram />
        </div>

        <br />
        {/* Footer */}
        {/* <footer className="bottom-0 opacity-50">
          <div className="md:h-8 ">
            <div className=" md:px-0">
              <p className="text-center text-sm sm:text-[100%]">
                Thanks &nbsp;
              </p>
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
        </footer> */}
        <br />
      </div>
    </>
  );
};
export default HomeNavLinks;
