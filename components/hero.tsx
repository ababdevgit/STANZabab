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

const Hero = () => {
  return (
    <section className="main-hero-background pt-[250px] pb-[169px]">
      <div className="max-w-[1440px] w-full mx-auto flex items-center gap-8">
        <div>
          <h1 className="text-[50px] text-white font-bold leading-normal mb-9">
            Start a new MLM project with STANZabab
          </h1>

          <h2 className="text-[30px] text-white font-normal mb-[50px]">
            STANZabab is an investment platform for stable high-yield asset
            growth.
          </h2>

          <div className="flex items-center gap-[38px] mb-[50px]">
            {indicators.map((indicator, index) => (
              <div
                key={`main-hero-indicator-${index + 1}`}
                className="main-hero-indicator w-[307px] h-[104px] px-8 py-3 rounded-[28px] flex flex-col justify-between"
              >
                <h3 className="text-[24px] font-normal">{indicator.label}</h3>
                <CountUp
                  start={0}
                  end={indicator.value}
                  duration={2}
                  separator=","
                  suffix={` ${indicator.unit}`}
                  className="text-3xl font-bold"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-brand-primary flex items-center justify-center w-[164px] h-[47px] rounded-[20px] text-lg text-white font-medium">
                See plan
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[164px] rounded-[20px] mt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/plan_en.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    English version
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/plan_kr.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    Korean version
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/plan_jp.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    Japanese version
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="bg-brand-primary flex items-center justify-center w-[164px] h-[47px] rounded-[20px] text-lg text-white font-medium">
                Introduction
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[164px] rounded-[20px] mt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/intro_en.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    English version
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/intro_kr.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    Korean version
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/pdfs/intro_jp.pdf`}
                    target="_blank"
                    className="text-base text-brand-primary font-medium leading-[18.75px] flex items-center justify-center py-3"
                  >
                    Japanese version
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={637}
          height={576}
          className="main-hero object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
