"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Work", path: "#work" },
  { name: "Speaking", path: "#speaking" },
  { name: "Music", path: "#music" },
  { name: "Developer", path: "#developer" },
  { name: "Contact", path: "#contact" },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0.25, 0.6, 0.9],
      }
    );

    const observedElements = navItems
      .map((item) => document.querySelector<HTMLElement>(item.path))
      .filter((section): section is HTMLElement => Boolean(section));

    observedElements.forEach((section) => observer.observe(section));

    return () => {
      observedElements.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateActiveFromHash = () => {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    };

    updateActiveFromHash();
    window.addEventListener("hashchange", updateActiveFromHash);

    return () => window.removeEventListener("hashchange", updateActiveFromHash);
  }, []);

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  const handleLinkClick = (path: string) => {
    setActiveSection(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#001122]" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="#home" className="text-2xl font-bold">
          Jens Osberg
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <ul
          id="primary-navigation"
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex z-40 md:items-center list-none absolute md:static bg-[#001122] md:bg-transparent top-16 left-0 w-full md:space-y-0 md:space-x-6 space-y-6 md:py-0 py-4 px-6`}
        >
          {navItems.map((item) => (
            <li key={item.path} className="text-center">
              <Link
                href={item.path}
                scroll
                onClick={() => handleLinkClick(item.path)}
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
