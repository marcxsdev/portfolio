import "./App.css";

// Importe o seu componente FadeIn
import FadeIn from "./components/common/FadeIn";

import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Skills from "./components/sections/Skills";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import GetInTouch from "./components/sections/GetInTouch";

function App() {
  return (
    <div>
      <Header />
      <Introduction />

      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Experiences />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <GetInTouch />
      </FadeIn>
    </div>
  );
}

export default App;
