import LanguageSwitch from "../common/LanguageSwitch";
import ThemeSwitch from "../common/ThemeSwitch";
import HamburguerMenu from "../common/HamburguerMenu";

const Header = () => {
  return (
    <header className="mx-[30px] md:mx-[75px]">
      <div className="flex flex-row items-center justify-between py-9 md:py-12">
        <LanguageSwitch />

        {/* Lado direito */}
        <div className="flex flex-row items-center gap-12">
          {/* Sempre visível */}
          <ThemeSwitch />

          {/* Só aparece em telas grandes */}
          <div className="hidden lg:flex">
            <HamburguerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
