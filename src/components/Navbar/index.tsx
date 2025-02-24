import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const navLinks = [
    { name: "PRODUCT", href: "/product", primary: true },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "BLOGS", href: "/blogs" },
  ];

  return (
    <nav className="flex justify-center w-full py-4">
      <div className="flex justify-between items-center min-w-[85%] text-background">
        <div className="h-16">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-2xl font-montserrat font-medium">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={link.primary ? "text-primary" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="p-2">
              <Image
                src="/ham.svg"
                alt="menu"
                width={1000}
                height={1000}
                className="h-8 w-8"
              />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xl font-montserrat font-medium ${
                      link.primary ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/contact">
                  <button className="bg-background text-white px-5 py-3 rounded-lg text-lg font-montserrat font-medium w-full mt-4">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Contact Button (Desktop) */}
        <Link href="/contact" className="hidden lg:block">
          <button className="bg-background text-white px-5 py-3 rounded-lg text-lg font-montserrat font-medium">
            CONTACT US
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
