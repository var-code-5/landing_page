"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navLinks = [
    { name: "PRODUCT", href: "/#product" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "BLOGS", href: "/blogs" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/#product") {
      return pathname === "/";
    }
    if (href !== "/") {
      return pathname.startsWith(href);
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById('navbar');
      
      if (navbar) {
        // Show navbar when scrolling up, hide when scrolling down
        // Only apply this behavior after scrolling past a certain threshold (e.g., 100px)
        if (currentScrollPos > 100) {
          if (prevScrollpos > currentScrollPos) {
            // Scrolling up - show navbar
            navbar.style.top = '0';
            setIsOpen(false); // Close mobile menu when scrolling
          } else {
            // Scrolling down - hide navbar
            navbar.style.top = '-100px';
            setIsOpen(false); // Close mobile menu when scrolling
          }
        } else {
          // Always show navbar when near the top
          navbar.style.top = '0';
        }
      }
      
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-2 md:py-4 h-[10vh] bg-foreground shadow-lg" 
      id="navbar"
      style={{ transition: 'top 0.5s ease-in-out' }}
    >
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:min-w-[85%] text-background">
        <div className="h-10 sm:h-12 md:h-16">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-lg xl:text-2xl font-montserrat font-medium">
          <ul className="flex gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "text-primary font-semibold transition-all duration-150"
                      : "hover:text-primary transition-all duration-150"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-1 md:p-2">
              <Image
                src="/ham.svg"
                alt="menu"
                width={1000}
                height={1000}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={
                      isActive(link.href)
                        ? "text-xl font-montserrat font-semibold text-primary"
                        : "text-xl font-montserrat font-medium hover:text-primary transition-all duration-150"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Contact Button (Desktop) */}
        <Link href="/contact" className="hidden lg:block">
          <button className="bg-background text-white px-3 py-2 lg:px-5 lg:py-3 rounded-lg text-base lg:text-lg font-montserrat font-medium whitespace-nowrap">
            CONTACT US
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;