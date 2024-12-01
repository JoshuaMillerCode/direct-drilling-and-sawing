'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  function handleMenuClick() {
    setMenuToggle(!menuToggle);
  }

  function handleLinkClick() {
    setMenuToggle(false);
  }

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuToggle(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/about-us',
      text: 'About Us',
    },
    {
      url: '/services',
      text: 'Services',
    },
    {
      url: '/contact-us',
      text: 'Contact Us',
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29374C] px-3 py-1 md:px-10">
        <div className="flex items-center gap-4 text-[#F8F9FB]">
          <Link href="/">
            <Image
              className=""
              width={150}
              height={150}
              src="/logo.png"
              alt="Direct Drilling & Sawing Logo"
            />
          </Link>
          <div>
            <h2 className="text-[#F8F9FB] text-md md:text-lg font-bold leading-tight tracking-[-0.015em]">
              Direct Drilling &amp; Sawing
            </h2>
            <h4 className="text-[#F8F9FB] text-sm md:text-md font-bold leading-tight tracking-[-0.015em]">
              Daryl Oakes
            </h4>
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          <div className="lg:hidden">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white bg-blue-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleMenuClick}
              ref={buttonRef}
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              ref={menuRef}
              id="dropdown"
              class={`z-10 ${
                menuToggle ? '' : 'hidden'
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 fixed top-24 right-2`}
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {link.text}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex flex-col md:flex-row items-center rounded">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded"
                onClick={handleLinkClick}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* <button id="menu" className="lg:hidden">
            <i className="fa-solid fa-bars fa-2xl"></i>
          </button>
          <div className="flex lg:flex flex-col md:flex-row items-center   fixed rounded bg-[#131C24]  w-96 top-24 right-6">
            <Link
              className="p-4 text-[#F8F9FB] text-sm text-center font-medium leading-normal   border-black hover:bg-[#1a77c5] w-full h-14"
              href="/"
            >
              Home
            </Link>

            <Link
              className="p-4 text-[#F8F9FB] text-sm text-center font-medium leading-normal   border-black hover:bg-[#1a77c5] w-full h-14"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="p-4 text-[#F8F9FB] text-sm text-center font-medium leading-normal  border-black hover:bg-[#1a77c5] w-full h-14"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="p-4 text-[#F8F9FB] text-sm text-center font-medium leading-normal   border-black hover:bg-[#1a77c5] w-full h-14"
              href="/contact-us"
            >
              Contact Us
            </Link>
           </div> 
          */}
          {/* <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/7ef0ed6b-32e1-4ca6-8151-7ddc2e8ea9df.png")`,
            }}
          ></div> */}
        </div>
      </header>
    </>
  );
}

export default NavBar;
