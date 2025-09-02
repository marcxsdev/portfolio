import "./App.css";

import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Skills from "./components/sections/Skills";
import Experiences from "./components/sections/Experiences";
import ProjectCard from "./components/ui/ProjectCard";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <Experiences />
      <ProjectCard />
    </div>
  );
}

export default App;
