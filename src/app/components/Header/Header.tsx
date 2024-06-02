"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const page = window.location.pathname;
    const activeMenu = menu.find((item) => item.link === page)?.id;
    setActiveMenu(activeMenu ?? "");
  }, []);

  const menu = [
    {
      id: "00",
      name: "home",
      link: "/",
    },
    {
      id: "01",
      name: "destination",
      link: "/destination",
    },
    {
      id: "02",
      name: "crew",
      link: "/crew",
    },
    {
      id: "03",
      name: "technology",
      link: "/technology",
    },
  ];

  return (
    <div className="fixed z-[99] top-0 inset-x-0 pt-8 md:pt-0 lg:pt-10">
      <div className="flex justify-between items-center">
        <div className="pl-6 md:pl-10 lg:pl-14">
          <a href="/">
            <img
              src="logo.svg"
              alt="logo"
              className="w-10 md:w-12 h-10 md:h-12"
            />
          </a>
        </div>

        {/* Desktop */}
        <div className="max-md:hidden">
          <div className="backdrop-blur-[81.55px] bg-[rgba(255,255,255,0.04)]">
            <ul className="flex gap-9 lg:gap-12 pl-32 pr-40">
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`flex gap-3 py-10 border-b-4 border-transparent hover:border-white [&.active]:border-white ${
                      activeMenu === item.id ? "active" : ""
                    }`}
                  >
                    <span className="md:max-lg:hidden text-[1rem] leading-[1] tracking-[0.16875em] font-bold">
                      {item.id}
                    </span>
                    <span className="md:max-lg:text-[0.875rem] text-[1rem] leading-[1] tracking-[0.16875em] capitalize">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End Desktop */}

        {/* Mobile */}
        <div className="md:hidden">
          <div className="pr-6">
            <button type="button" onClick={() => setMobileActive(true)}>
              <img src="/icons/icon-hamburger.svg" alt="Open Menu" />
            </button>
          </div>
          <div
            className={`fixed right-0 inset-y-0 w-[65vw] backdrop-blur-[81.55px] bg-[rgba(255,255,255,0.04)] ${
              !mobileActive ? "hidden" : ""
            }`}
          >
            <div className="flex justify-end pt-8 pb-14 pr-6">
              <button type="button" onClick={() => setMobileActive(false)}>
                <img src="/icons/icon-close.svg" alt="Close Menu" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 pl-8">
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`flex gap-3 py-2 border-r-4 border-transparent hover:border-white [&.active]:border-white ${
                      activeMenu === item.id ? "active" : ""
                    }`}
                  >
                    <span className="text-[1rem] leading-[1] tracking-[0.16875em] font-bold">
                      {item.id}
                    </span>
                    <span className="text-[1rem] leading-[1] tracking-[0.16875em] capitalize">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile */}
      </div>
    </div>
  );
}
