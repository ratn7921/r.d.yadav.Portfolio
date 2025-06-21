

'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out px-5 lg:px-8 xl:px-[8%] 
        ${isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-md' : 'py-5 bg-white/10 backdrop-blur-lg shadow-lg'}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.Sign}
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? 'w-20' : 'w-28'} cursor-pointer`}
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "" :  "bg-white/30 backdrop-blur-sm shadow-sm text-sm"} `}>
          <li><a href="#top" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About me</a></li>
          <li><a href="#Services" className="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#work" className="hover:text-blue-600 transition-colors">Achievements
</a></li>
          <li><a href="#Hireme" className="hover:text-blue-600 transition-colors">Hire me</a></li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button>
            {/* <Image src={assets.moon_icon} alt="Theme toggle" className="w-6" /> */}
          </button>

          <a
            href="Hireme"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full text-sm"
          >
            Contact me
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 z-50 transition-transform duration-500"
      >
        <div className="absolute right-5 top-6" onClick={closeMenu}>
          <Image src={assets.close_black} alt="Close menu" className="w-5 cursor-pointer" />
        </div>
        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#Services" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" onClick={closeMenu}>My work</a></li>
        <li><a href="#Contact" onClick={closeMenu}>Hire me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
