"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";

import { indicators } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileHero = () => {
  return (
    <section className="main-hero-background p-6 pb-8">
      <h1 className="text-[28px] text-white font-bold leading-normal mb-6">
        Start a new MLM project with STANZabab
      </h1>
      <h2 className="text-[18px] text-white font-normal leading-normal mb-6">
        STANZabab is an investment platform for stable high-yield asset growth.
      </h2>
      <div className="flex items-center justify-between mb-8">
        {indicators.map((indicator, index) => (
          <div
            key={`main-hero-indicator-${index + 1}`}
            className="main-hero-indicator w-[161px] h-[56px] px-4 py-2 rounded-[20px] flex flex-col justify-between"
          >
            <h3 className="text-sm font-normal">{indicator.label}</h3>
            <CountUp
              start={0}
              end={indicator.value}
              duration={2}
              separator=","
              suffix={` ${indicator.unit}`}
              className="text-sm font-bold"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mb-10">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[90px] h-[26px] flex justify-center items-center text-xs text-white font-medium rounded-[20px] bg-brand-primary">
            See plan
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[90px] rounded-[20px] mt-2 p-0">
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/plan_en.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                EN version
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/plan_kr.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                KR version
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/plan_jp.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                JP version
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-[90px] h-[26px] flex justify-center items-center text-xs text-white font-medium rounded-[20px] bg-brand-primary">
            Introduction
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[90px] rounded-[20px] mt-2">
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/intro_en.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                EN version
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/intro_kr.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                KR version
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/pdfs/intro_jp.pdf`}
                target="_blank"
                className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3 px-0"
              >
                JP version
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <a
          href="https://stanzababsystem.com"
          rel="noopener noreferrer"
          target="_blank"
          className="w-[90px] h-[26px] flex justify-center items-center text-xs text-white font-medium rounded-[20px] bg-brand-primary"
        >
          Register
        </a>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/mobile-hero.png"
          alt="Hero"
          width={339}
          height={311}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default MobileHero;
