import "./App.css";

import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Skills from "./components/sections/Skills";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
