import Image from "next/image";
import { Fragment } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const MobileBusinessStructure = () => {
  return (
    <Fragment>
      <section className="px-6 py-8 business-structure-background">
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

        <h2 className="text-lg text-white font-bold leading-normal mb-3">
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

        <h2 className="text-lg font-bold leading-normal mb-3">
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
    </Fragment>
  );
};

export default MobileBusinessStructure;
