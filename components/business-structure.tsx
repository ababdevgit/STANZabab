import Image from "next/image";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BusinessStructure = () => {
  return (
    <>
      <section className="business-structure-background">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center pt-[50px] pb-[300px]">
          <h2 className="text-[30px] text-white font-bold">
            Business Structure
          </h2>
          <p className="text-[20px] text-white font-medium text-center mt-4 mb-[65px]">
            STANZabab is structured with a platform architecture that integrates
            business modules for crypto-game-financial systems, and services
            ranging from payment processing to transfers.
          </p>
          <Image
            src="/images/stanzabab-platform-app.png"
            alt="STANZabab Platform App"
            width={1341}
            height={686}
            className="object-contain"
          />
        </div>

        <div className="max-w-[1440px] mx-auto flex items-start justify-center gap-7 pb-[480px]">
          <Image
            src="/images/kriptosh.png"
            alt="Kriptosh"
            width={873}
            height={528}
            className="object-contain"
          />
          <div className="max-w-[498px]">
            <h2 className="text-[30px] text-white font-bold mb-4">
              STANZabab Partner
            </h2>
            <h3 className="text-[30px] text-brand-primary font-bold mb-4">
              - Kriptosh
            </h3>
            <p className="text-[20px] text-white font-medium leading-[175%] mb-[54px]">
              Kriptosh is an Indonesia-based online cryptocurrency exchange that
              is actively involved in the development and enhancement of various
              blockchain services, including crypto trading, custody services,
              and so on.
              <br />
              <br />
              In September 2023, Kriptosh obtained BAPEBBTI’s license approval
              and successfully completed API integration with Indonesia’s top
              bank, BCA.
            </p>
            <div className="w-full flex items-center justify-center mb-12">
              <a
                href="https://kriptosh.com"
                rel="noopener noreferrer"
                target="_blank"
                className="w-[164px] h-[47px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-lg font-medium"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto flex items-start justify-center gap-7 pb-[240px]">
          <div className="max-w-[504px]">
            <h2 className="text-[30px] text-white font-bold mb-4">
              STANZabab Partner
            </h2>
            <h3 className="text-[30px] text-brand-primary font-bold mb-4">
              - ABAB.TRADE
            </h3>
            <p className="text-[20px] text-white font-medium leading-[175%] mb-[54px]">
              ABAB.TRADE is a trusted and reputable mini graphic game platform
              that is integrated with Binance chart. ABAB not only provides
              trustworthy chart, but also constantly improves the platform to
              offer a better experience for trades.
              <br />
              <br />
              ABAB is the next generation trading platform that utilizes
              state-of-art technology to provide traders with accurate and
              transparent price quotations.
            </p>
            <div className="w-full flex items-center justify-center">
              <a
                href="https://abab.trade"
                rel="noopener noreferrer"
                target="_blank"
                className="w-[164px] h-[47px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-lg font-medium"
              >
                Visit
              </a>
            </div>
          </div>
          <Image
            src="/images/abab-trade.png"
            alt="ABAB.TRADE"
            width={873}
            height={528}
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <div className="max-w-[1440px] mx-auto flex items-start justify-center gap-7 pt-[240px] pb-[480px]">
          <Image
            src="/images/btchouse.png"
            alt="BTCHOUSE"
            width={873}
            height={528}
            className="object-contain"
          />
          <div className="max-w-[498px]">
            <h2 className="text-[30px] font-bold mb-4">STANZabab Partner</h2>
            <h3 className="text-[30px] text-brand-primary font-bold mb-4">
              - BTCHOUSE
            </h3>
            <p className="text-[20px] font-medium leading-[175%] mb-[54px]">
              BTCHouse is the first-ever global online casino in Indonesia
              dedicated to cryptocurrency deposits and withdrawals. A global
              top-tier casino that integrates online casino, sports, Texas
              Hold’em, daily lotto, and graphic mini gmes.
              <br />
              <br />
              BTCHOUSE utilizes BAYC IP and provides various competitive
              tournaments via platform. Play games using cryptocurrency at
              BTCHOUSE!
            </p>
            <div className="w-full flex items-center justify-center">
              <a
                href="https://btchouse.io"
                rel="noopener noreferrer"
                target="_blank"
                className="w-[164px] h-[47px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-lg font-medium"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto flex items-start justify-center gap-4 pb-[240px]">
          <div className="max-w-[504px]">
            <h2 className="text-[30px] font-bold mb-4">STANZabab Partner</h2>
            <h3 className="text-[30px] text-brand-primary font-bold mb-4">
              - Zom B Ape Staking Wallet
            </h3>
            <p className="text-[20px] font-medium leading-[175%] mb-[54px]">
              The Zom B Ape wallet is a cryptocurrency wallet that selectively
              combines the advantage of both centralized and decentralized
              wallets, created to support STANZabab and other promising projects
              for incubating coins and getting listed on global exchanges.
              <br />
              <br />
              Feel free to register and stake your asset to earn extra profit
              via this platform!
            </p>
            <div className="w-full flex items-center justify-center">
              <a
                href="https://stanzababwallet.com"
                rel="noopener noreferrer"
                target="_blank"
                className="w-[164px] h-[47px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-lg font-medium"
              >
                Visit
              </a>
            </div>
          </div>
          <Image
            src="/images/zomb-ape-staking-wallet.png"
            alt="Zom B Ape Staking Wallet"
            width={873}
            height={528}
            className="object-contain"
          />
        </div>

        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-36 pb-[100px]">
          <Image
            src="/images/pay.png"
            alt="Pay"
            width={608}
            height={743}
            className="object-contain"
          />
          <div>
            <h2 className="text-[30px] font-bold mb-6">
              Get your debit card here!
            </h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <span className="w-[164px] h-[47px] rounded-[20px] flex items-center justify-center bg-brand-primary text-white text-lg font-medium mb-10 cursor-pointer">
                  Get card here!
                </span>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>Debit card coming soon!</AlertDialogTitle>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-brand-primary text-white hover:bg-brand-primary hover:text-white">
                    Okay
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <div className="flex justify-center items-center gap-[54px]">
              <Image
                src="/images/card.png"
                alt="Card"
                width={240}
                height={370}
                className="object-contain"
              />
              <p className="max-w-[298px] text-[20px] font-medium leading-[175%]">
                Through a contract with a Binance payment solution provider, we
                offer Indonesia’s first payment gateway service and issue a
                crypto debit Visa card, enabling withdrawals and payments
                worldwide from anywhere!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessStructure;
