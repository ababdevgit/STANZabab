"use client";

import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import ScrollIntoView from "react-scroll-into-view";

const Header = () => {
  return (
    <header>
      <nav className="h-[98px] px-6 flex items-center justify-between">
        <Logo />
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={32} color="#B83335" className="hover:cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="mobile-background p-6">
            <ul className="space-y-6">
              <li>
                <a
                  href="https://stanzababsystem.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-[90px] h-[26px] rounded-[20px] flex items-center justify-center text-xs text-white font-medium bg-brand-primary"
                >
                  Register
                </a>
              </li>
              <li>
                <ScrollIntoView selector="#mobileCompanyIntro">
                  <span className="text-xs text-white font-bold leading-normal">
                    INTRODUCTION
                  </span>
                </ScrollIntoView>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  PLAN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  WITH INDONESIA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  COMPANY INTRO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  BUSINESS STRUCTURE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  STATNZabab Partner
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  Debit Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs text-white font-bold leading-normal"
                >
                  STANZabab CS
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
