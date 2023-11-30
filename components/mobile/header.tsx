"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <>
      <header id="header" className="h-[98px] bg-white fixed inset-0 shadow-md">
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
                {/* <li>
                  <Link href={`/pdfs/stanzabab-intro.pdf`} target="_blank">
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        INTRODUCTION
                      </span>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/pdfs/stanzabab-reward-plan.pdf`}
                    target="_blank"
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        PLAN
                      </span>
                    </SheetClose>
                  </Link>
                </li> */}
                <li>
                  <ScrollLink
                    to="with-indonesia"
                    spy={true}
                    smooth={true}
                    offset={-98}
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        WITH INDONESIA
                      </span>
                    </SheetClose>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="company-intro"
                    spy={true}
                    smooth={true}
                    offset={-98}
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        COMPANY INTRO
                      </span>
                    </SheetClose>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="business-structure"
                    spy={true}
                    smooth={true}
                    offset={-98}
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        BUSINESS STRUCTURE
                      </span>
                    </SheetClose>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="stanzabab-partner"
                    spy={true}
                    smooth={true}
                    offset={-98}
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        STATNZabab Partner
                      </span>
                    </SheetClose>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="debit-card"
                    spy={true}
                    smooth={true}
                    offset={-98}
                  >
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        Debit Card
                      </span>
                    </SheetClose>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="footer" spy={true} smooth={true}>
                    <SheetClose className="outline-none">
                      <span className="text-xs text-white font-bold leading-normal">
                        STANZabab CS
                      </span>
                    </SheetClose>
                  </ScrollLink>
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
