import Image from "next/image";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-background flex flex-col items-center justify-center pt-[66px] pb-8">
      <h3 className="text-[30px] text-white font-bold mb-8">
        Our customer service channels
      </h3>
      <div className="mb-8 flex flex-col items-center gap-8">
        <a
          href="https://t.me/stanzabab"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsTelegram color="white" className="w-11 h-11" />
        </a>
        <div className="space-y-3 text-center">
          <p className="text-white text-lg">Telegram cs: @STANZabab_global</p>
          <p className="text-white text-lg">Kakao cs: stanzabab_CS</p>
          <p className="text-white text-lg">Line cs: stanzabab_global_cs</p>
        </div>
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
