"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Work", path: "#work" },
    { name: "Speaking", path: "#speaking" },
    { name: "Music", path: "#music" },
    { name: "Other", path: "#other" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full z-30 fixed bg-transparent text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Jens Osberg</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex z-40 md:items-center list-none absolute md:static bg-slate-600 bg-opacity-50 md:bg-transparent top-16 left-0 w-full md:space-y-0 md:space-x-6 space-y-6 md:py-0 py-4 px-6`}
        >
          {navItems.map((item) => (
            <li key={item.path} className="text-center">
              <Link
                href={item.path}
                scroll={true}
                className={`relative no-underline hover:text-gray-300 transition duration-200 ${
                  activeSection === item.path ? "font-semibold" : ""
                }`}
              >
                {item.name}
                {activeSection === item.path && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-white"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
