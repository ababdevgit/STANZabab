import Logo from "@/components/logo";

const Header = () => {
  return (
    <header className="max-w-[1920px] w-full">
      <nav className="max-w-[1440px] w-full h-[98px] mx-auto flex items-center justify-between px-6">
        <Logo />
        <a
          href="https://stanzababsystem.com"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center justify-center w-[164px] h-[47px] rounded-[20px] bg-brand-primary text-white text-lg font-medium"
        >
          Log In / Join
        </a>
      </nav>
    </header>
  );
};

export default Header;
