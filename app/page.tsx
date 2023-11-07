import { Fragment } from "react";

import Hero from "@/components/hero";
import StanzababWithIndonesia from "@/components/stanzabab-with-indonesia";
import CompanyIntro from "@/components/company-intro";
import BusinessStructure from "@/components/business-structure";

import MobileHero from "@/components/mobile/hero";
import MobileStanzababWithIndonesia from "@/components/mobile/stanzabab-with-indonesia";
import MobileCompanyIntro from "@/components/mobile/company-intro";
import MobileBusinessStructure from "@/components/mobile/business-structure";

const Home = () => {
  return (
    <Fragment>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <Hero />
        <StanzababWithIndonesia />
        <CompanyIntro />
        <BusinessStructure />
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <MobileHero />
        <MobileStanzababWithIndonesia />
        <MobileCompanyIntro />
        <MobileBusinessStructure />
      </div>
    </Fragment>
  );
};

export default Home;
