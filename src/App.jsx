import "./App.css";

import Header from "./components/sections/Header";
import AnimatedContactButtons from "./components/common/AnimatedButton";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <AnimatedContactButtons />
      </div>
    </div>
  );
}

export default App;
