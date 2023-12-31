import Image from "next/image";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="footer-background flex flex-col justify-center items-center pt-12"
      id="footer"
    >
      <h3 className="text-lg text-white font-bold leading-[175%] mb-4">
        Our customer service channels
      </h3>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://t.me/stanzababchannel"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsTelegram color="white" className="w-6 h-6" />
        </a>
        <div className="space-y-2 text-center">
          <p className="text-white text-xs">Telegram cs: @STANZabab_globals1</p>
          <p className="text-white text-xs">Kakao cs: stanzabab_CS</p>
          <p className="text-white text-xs">Line cs: stanzabab_global_cs</p>
        </div>
      </div>

      <div className="py-10 flex flex-col items-center gap-y-10">
        <a
          href="https://abab.trade"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[20px] text-white font-bold leading-[175%]"
        >
          <Image
            src="/images/abab.png"
            alt="ABAB Trade"
            width={148}
            height={39}
            className="object-contain"
          />
        </a>
        <a
          href="https://btchouse.io"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[20px] text-white font-bold leading-[175%]"
        >
          <Image
            src="/images/btc-house.png"
            alt="BTChouse"
            width={130}
            height={73}
            className="object-contain"
          />
        </a>
        <a
          href="https://stanzababwallet.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[20px] text-white font-bold leading-[175%]"
        >
          <Image
            src="/images/zombape-wallet.png"
            alt="Zombape wallet"
            width={159}
            height={65}
            className="object-contain fill-white"
          />
        </a>
        <a
          href="https://ipfs.io/ipfs/Qmau4XoXuMYLsCscJcdZy2CmibkkcQYxJnNUsopaTYR2wc"
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
        width={195}
        height={34}
        className="object-contain mb-7"
      />
      <p className="text-xs text-white font-normal leading-[175%] pb-4">
        Copyright © 2023, STANZabab. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
