"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/#properties" },
    { name: "Agents", href: "/agents" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (pageName: string) => {
    setActivePage(pageName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-background z-50 shadow-sm">
      <Link className="flex items-center justify-center" href="/">
        <Home className="h-6 w-6" />
        <span className="ml-2 font-bold text-lg">Arcodez Real Estate</span>
      </Link>
      <nav className="ml-auto flex items-center">
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 md:left-auto w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 gap-4 border-b md:border-0 shadow-md md:shadow-none`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                activePage === item.name.toLowerCase() ? "text-primary" : ""
              }`}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
