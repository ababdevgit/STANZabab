"use client";

import Logo from "@/components/logo";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header id="header">
        <nav className="h-[98px] px-6 flex items-center justify-between">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <Menu
                size={32}
                color="#B83335"
                className="hover:cursor-pointer"
              />
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
                  <SheetClose className="outline-none">
                    <span className="text-xs text-white font-bold leading-normal">
                      INTRODUCTION
                    </span>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose className="outline-none">
                    <span className="text-xs text-white font-bold leading-normal">
                      PLAN
                    </span>
                  </SheetClose>
                </li>
                <li>
                  <Link to="with-indonesia" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        WITH INDONESIA
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link to="company-intro" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        COMPANY INTRO
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link to="business-structure" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        BUSINESS STRUCTURE
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link to="stanzabab-partner" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        STATNZabab Partner
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link to="debit-card" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        Debit Card
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link to="footer" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        STANZabab CS
                      </span>
                    </SheetClose>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
};

export default Header;
