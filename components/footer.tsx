import Image from "next/image";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-background flex flex-col items-center justify-center pt-[66px] pb-8">
      <h3 className="text-[30px] text-white font-bold mb-8">
        Our customer service channels
      </h3>
      <div className="flex flex-col items-center gap-8">
        <a
          href="https://t.me/stanzababchannel"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsTelegram color="white" className="w-11 h-11" />
        </a>
        <div className="space-y-3 text-center">
          <p className="text-white text-lg">Telegram cs: @STANZabab_globals</p>
          <p className="text-white text-lg">Kakao cs: stanzabab_CS</p>
          <p className="text-white text-lg">Line cs: stanzabab_global_cs</p>
        </div>
      </div>
      <div className="py-20 flex items-center justify-between w-[910px]">
        <a
          href="https://abab.trade"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[30px] text-white font-bold leading-[175%]"
        >
          abab.trade
        </a>
        <a
          href="https://btchouse.io"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[30px] text-white font-bold leading-[175%]"
        >
          BTChouse
        </a>
        <a
          href="https://stanzababwallet.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[30px] text-white font-bold leading-[175%]"
        >
          Zombape wallet
        </a>
        <a
          href="https://madeby.yuga.com/apes/product/0x4339dc32257a209c2b8657f55bc47a172321eb0f815e6b390fa4b3322c3ee86a"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[30px] text-white font-bold leading-[175%]"
        >
          <Image
            src="/images/made-by-apes.png"
            alt="Made by apes"
            width={60}
            height={60}
            className="object-contain"
          />
        </a>
      </div>
      <Image
        src="/images/footer-logo.png"
        alt="Logo"
        width={356}
        height={63}
        className="object-contain mb-[105px]"
      />
      <p className="text-[20px] text-white font-normal leading-[175%]">
        Copyright © 2023, STANZabab. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
