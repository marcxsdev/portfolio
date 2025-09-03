import LanguageSwitch from "../common/LanguageSwitch";
import ThemeSwitch from "../common/ThemeSwitch";
import HamburguerMenu from "../common/HamburguerMenu";

const Header = () => {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1440px] px-[30px] md:px-[75px]">
        <div className="flex flex-row items-center justify-between py-9 md:py-12">
          <LanguageSwitch />
          <div className="flex flex-row items-center gap-12">
            <ThemeSwitch />
            <div className="hidden lg:flex">
              <HamburguerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
