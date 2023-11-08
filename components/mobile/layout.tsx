import Image from "next/image";

import Header from "@/components/mobile/header";
import Footer from "@/components/mobile/footer";
import MobileHero from "@/components/mobile/hero";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const intro = [
  {
    label: "Indonesian Company Registration",
    image: "indonesian-company-registration.png",
    width: 86,
    height: 134,
    maxWidth: 110,
  },
  {
    label: "Indonesian cryptocurrency exchange  license by Bappebti",
    image: "indonesian-cryptocurrency-exchange-license-by-bappebti.png",
    width: 171,
    height: 106.5,
    maxWidth: 189,
  },
  {
    label: "RNG Certificate to operate platform on EU",
    image: "rng-certificate-to-operate-platform-on-eu.png",
    width: 90,
    height: 134,
    maxWidth: 136,
  },
  {
    label: "Indonesian MLM license",
    image: "indonesian-mlm-license.png",
    width: 163,
    height: 107,
    maxWidth: 80,
  },
];

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full min-h-screen flex md:hidden flex-col pt-[98px]">
      <Header />
      <MobileHero />

      <section
        className="px-6 py-8 flex flex-col justify-center items-center"
        id="with-indonesia"
      >
        <Image
          src="/images/stanzabab-with-indonesia.png"
          alt="Logo"
          width={132}
          height={23}
          className="object-contain"
        />
        <h2 className="mt-3 text-xs font-bold">WITH INDONESIA</h2>
        <div className="mt-3 space-y-5">
          <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
            {`The MLM project is a continuously appealing project that emerges
          worldwide, including in Asia, Europe, and North America. Many MLM
          projects start with confidence, but none have shown sustainability and
          ultimately fade into obscurity.`}
          </p>
          <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
            {`The critical failure of these projects is one: blind fundraising
          without an established business model. MLM projects typically see the
          funds raised being inversely spent over time, yet no project considers
          financial factors as they proceed with a business without a clear
          business model (or on the premise of "what business will be conducted
          in the future").`}
          </p>
          <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
            {`As a result, fundraising without business readiness inevitably transforms into a form that will be depleted over time, leaving investors in a position where the return of their investment becomes impossible.`}
          </p>
          <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
            {`STANZabab aims to initiate an MLM business based on a clear business model. Starting with obtaining the necessary licenses to conduct our business, we have partially completed the development of various platforms, including exchanges, casinos, and NFTs, and the fundamental ecosystem of the project is already fully implemented.`}
          </p>
        </div>
      </section>

      <section className="px-6 py-8" id="company-intro">
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-3">
            Company Intro
            <br />
            <span className="inline-block text-brand-primary mt-3">
              PT DNA Metaverse Jaya
            </span>
          </h2>
          <p className="text-xs text-[#262424] font-normal">
            Founded in Indonesia in 2019, our company is composed of over 50
            professionals from various fields, standing at the forefront of
            business innovation.
            <br />
            We hold an RNG (Random Number Generator) license and have been
            authorized to conduct MLM business by the Indonesian organization
            AP2LI.
            <br />
            Moreover, we have successfully concluded a usage contract with BAYC
            NFT and established a strategic partnership with the Indonesian
            cryptocurrency exchange company Kriptosh. With these licenses,
            contracts, and local partnerships, DNA Metaverse Jaya has launched
            STANZabab.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 gap-y-6">
          {intro.map((item, index) => (
            <div
              key={`company-intro-${index + 1}`}
              className="flex flex-col items-center justify-end"
            >
              <Image
                src={`/images/${item.image}`}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="object-contain"
              />
              <p
                className="text-center mt-4 text-[8px] text-[#262424] font-medium leading-[175%]"
                style={{
                  maxWidth: item.maxWidth,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* <MobileBusinessStructure /> */}

      <section
        className="px-6 py-8 business-structure-background"
        id="business-structure"
      >
        <h2 className="text-lg text-white font-bold leading-normal mb-3">
          Business Structure
        </h2>
        <p className="text-xs text-white font-medium leading-normal mb-11">
          STANZabab is structured with a platform architecture that integrates
          business modules for crypto-game-financial systems, and services
          ranging from payment processing to transfers.
        </p>
        <div className="flex justify-center items-center pb-11">
          <Image
            src="/images/mobile-stanzabab-platform-app.png"
            alt="STANZabab Platform App"
            width={343}
            height={997}
            className="object-contain"
          />
        </div>

        <h2
          className="text-lg text-white font-bold leading-normal mb-3"
          id="stanzabab-partner"
        >
          STANZabab Partner
        </h2>
        <h3 className="text-xs text-brand-primary font-bold leading-normal mb-3">
          - Kriptosh
        </h3>
        <p className="text-xs text-white font-medium leading-normal mb-12">
          Kriptosh is an Indonesia-based online cryptocurrency exchange that is
          actively involved in the development and enhancement of various
          blockchain services, including crypto trading, custody services, and
          so on.
          <br />
          <br />
          In September 2023, Kriptosh obtained BAPEBBTI’s license approval and
          successfully completed API integration with Indonesia’s top bank, BCA.
        </p>
        <div className="flex items-center justify-center mb-12">
          <a
            href="https://kriptosh.com"
            rel="noopener noreferrer"
            target="_blank"
            className="w-[90px] h-[26px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-xs font-medium"
          >
            Visit
          </a>
        </div>

        <h2 className="text-lg text-white font-bold leading-normal mb-3">
          STANZabab Partner
        </h2>
        <h3 className="text-xs text-brand-primary font-bold leading-normal mb-3">
          - ABAB.TRADE
        </h3>
        <p className="text-xs text-white font-medium leading-normal mb-12">
          ABAB.TRADE is a trusted and reputable mini graphic game platform that
          is integrated with Binance chart. ABAB not only provides trustworthy
          chart, but also constantly improves the platform to offer a better
          experience for trades.
          <br />
          <br />
          ABAB is the next generation trading platform that utilizes
          state-of-art technology to provide traders with accurate and
          transparent price quotations.
        </p>
        <div className="flex items-center justify-center pb-3">
          <a
            href="https://abab.trade"
            rel="noopener noreferrer"
            target="_blank"
            className="w-[90px] h-[26px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-xs font-medium"
          >
            Visit
          </a>
        </div>
      </section>
      <section className="px-6 py-11">
        <h2 className="text-lg font-bold leading-normal mb-3">
          STANZabab Partner
        </h2>
        <h3 className="text-xs text-brand-primary font-bold leading-normal mb-3">
          - ABAB.TRADE
        </h3>
        <p className="text-xs font-medium leading-normal mb-11">
          BTCHouse is the first-ever global online casino in Indonesia dedicated
          to cryptocurrency deposits and withdrawals. A global top-tier casino
          that integrates online casino, sports, Texas Hold’em, daily lotto, and
          graphic mini gmes.
          <br />
          <br />
          BTCHOUSE utilizes BAYC IP and provides various competitive tournaments
          via platform. Play games using cryptocurrency at BTCHOUSE!
        </p>
        <div className="flex items-center justify-center pb-11">
          <a
            href="https://btchouse.io"
            rel="noopener noreferrer"
            target="_blank"
            className="w-[90px] h-[26px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-xs font-medium"
          >
            Visit
          </a>
        </div>

        <h2 className="text-lg font-bold leading-normal mb-3">
          STANZabab Partner
        </h2>
        <h3 className="text-xs text-brand-primary font-bold leading-normal mb-3">
          - Zom B Ape Staking Wallet
        </h3>
        <p className="text-xs font-medium leading-normal mb-11">
          The Zom B Ape wallet is a cryptocurrency wallet that selectively
          combines the advantage of both centralized and decentralized wallets,
          created to support STANZabab and other promising projects for
          incubating coins and getting listed on global exchanges.
          <br />
          <br />
          Feel free to register and stake your asset to earn extra profit via
          this platform!
        </p>
        <div className="flex items-center justify-center pb-11">
          <a
            href="https://stanzababwallet.com"
            rel="noopener noreferrer"
            target="_blank"
            className="w-[90px] h-[26px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-xs font-medium"
          >
            Visit
          </a>
        </div>

        <h2 className="text-lg font-bold leading-normal mb-3" id="debit-card">
          Get your Debit Card Here!
        </h2>
        <div className="flex justify-between items-center gap-5 mb-11">
          <Image
            src="/images/card.png"
            alt="Card"
            width={103}
            height={159}
            className="object-contain"
          />
          <p className="text-xs font-medium leading-normal">
            Through a contract with a Binance payment solution provider, we
            offer Indonesia’s first payment gateway service and issue a crypto
            debit Visa card, enabling withdrawals and payments worldwide from
            anywhere!
          </p>
        </div>
        <div className="flex items-center justify-center pb-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <span className="w-[102px] h-[26px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-xs font-medium mb-10 cursor-pointer">
                Get card here!
              </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Debit card coming soon!</AlertDialogTitle>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-brand-primary text-white hover:bg-brand-primary hover:text-white rounded-[20px] text-base">
                  Okay
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
      <Footer />
    </div>
  );
}
