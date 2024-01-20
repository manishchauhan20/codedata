"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import NavbarHeadding from "./NavbarHeadding";
import {sidebarItems ,intoductionLanguage,componentName ,formComponent} from "./sidebaritems";
import Sidebar from "./sidebar";
import Profile from "./profile";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const modalContentRef = useRef();

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setSidebarOpen((prev) => !prev);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModal, setIsModal] = useState(false);
  const toggleSearchBar = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isModal &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        console.log("Clicked outside modal content");
        toggleSearchBar();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isModal, toggleSearchBar]);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    
    <>
      <div>
        {isModal && (
          <div
            onClick={toggleSearchBar}
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed  inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto overflow-x-hidden z-50 flex top-12 justify-center"
          >
            <div
              className="relative  p-4 w-full max-w-2xl"
              ref={modalContentRef}
              onClick={stopPropagation}
            >
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <div className=" flex gap-1 items-center">
                    <FaSearch className="text-lg text-gray-400" />
                    <input
                      type="search"
                      className="text-lg outline-none w-[36rem] rounded-full dark:text-white px-4 cursor-pointer transition-all "
                      placeholder="Search Docs"
                    />
                  </div>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                {/* Modal footer */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <p>Made By :- MKC</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <nav
        className={`fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isModal ? "opactiy-50" : ""
        }`}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3 h-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                onClick={handleToggleDropdown}
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <Image
                  src="/arijit singh.jpg"
                  alt="FlowBite Logo"
                  width={32} // Set the width of the image
                  height={32} // Set the height of the image
                  className="h-8 me-3" // Add any additional classNamees for styling
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>

            <div className="flex gap-4">
              <NavbarHeadding />
              <div className="flex items-center">
                <div className=" pr-3">
                  <input
                    type="text"
                    id="search-navbar"
                    className={`flex-1 p-2 pl-6 text-sm ${
                      isSearchOpen ? "md:block" : "hidden md:block"
                    } text-gray-900 border cursor-pointer border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Search..."
                    onClick={toggleSearchBar}
                  />
                  <div className="">
                    <FaSearch
                      className={`md:hidden block cursor-pointer h-9 w-5 ${
                        isSearchOpen ? "hidden" : ""
                      }`}
                      onClick={toggleSearchBar}
                    />
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                      onClick={toggleModal}
                    >
                      <Image
                        src="/arijit singh.jpg"
                        alt="user photo"
                        width={32} // Set the width of the image
                        height={32} // Set the height of the image
                        className="w-8 h-8 rounded-full" // Add any additional classNamees for styling
                      />
                    </button>
                  </div>

                  {isModalVisible && <Profile />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-56 ${
          sidebarOpen ? "-translate-x-full" : ""
        } 
          h-screen pt-20  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <Sidebar items={sidebarItems} intoduction={intoductionLanguage} newitems={componentName} formsItems={formComponent}/>
        </div>
      </aside>
    </>
  );
};
export default Navbar;
