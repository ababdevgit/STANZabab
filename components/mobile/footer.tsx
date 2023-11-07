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
      <div className="mb-7 flex flex-col items-center gap-4">
        <a
          href="https://t.me/stanzabab"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsTelegram color="white" className="w-6 h-6" />
        </a>
        <div className="space-y-2 text-center">
          <p className="text-white text-xs">Telegram cs: @STANZabab_global</p>
          <p className="text-white text-xs">Kakao cs: stanzabab_CS</p>
          <p className="text-white text-xs">Line cs: stanzabab_global_cs</p>
        </div>
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
