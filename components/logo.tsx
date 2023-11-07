import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={180}
        height={32}
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
