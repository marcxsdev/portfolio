import "./App.css";

import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Skills from "./components/sections/Skills";
import ExperienceCard from "./components/ui/ExperienceCard";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <ExperienceCard />
    </div>
  );
}

export default App;
