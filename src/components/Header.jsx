"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const navItems = [
    { name: "Product" },
    { name: "Support" },
    { name: "Services" },
    { name: "Solution" },
    { name: "About Us" },
    { name: "Blog" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.from(".logo", { y: -30, opacity: 0 })
        .from(".nav-item", { y: -20, opacity: 0, stagger: 0.1 }, "-=0.4")
        .from(".lang", { x: 30, opacity: 0 }, "-=0.4");
    });

    // cleanup (important in React!)
    return () => ctx.revert();
  }, []);

  return (
    <header className=" w-full h-28 bg-black text-[#ADFF00] z-50 shadow-md max-sm:hidden overflow-hidden">
      <div className="h-10 bg-black" />
      <div className="flex justify-between items-center lg:px-5">
        <p className="logo font-bold text-lg cursor-pointer">LOGO</p>

        <nav className="flex gap-x-10 font-Inter">
          {navItems.map((item, index) => (
            <p
              key={index}
              className="nav-item relative cursor-pointer group text-[#ADFF00]"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#ADFF00] transition-all duration-300 group-hover:w-full"></span>
            </p>
          ))}
        </nav>

        <div className="lang cursor-pointer">
          <p>English</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
