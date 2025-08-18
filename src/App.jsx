import "./App.css";
import HamburgerMenu from "./components/common/HamburguerMenu";
import LanguageSwitch from "./components/common/LanguageSwitch";
import ThemeSwitch from "./components/common/ThemeSwitch";

function App() {
  return (
    <div>
      <LanguageSwitch />
      <ThemeSwitch />
      <div className="absolute top-0 right-0 w-24 h-24">
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default App;
