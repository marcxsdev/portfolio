import "./App.css";
import HamburgerMenu from "./components/common/HamburguerMenu";
import LanguageSwitch from "./components/common/LanguageSwitch";
import ThemeSwitch from "./components/common/ThemeSwitch";

function App() {
  return (
    <div>
      <LanguageSwitch />
      <ThemeSwitch />

      <HamburgerMenu />
    </div>
  );
}

export default App;
