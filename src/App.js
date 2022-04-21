import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Services from "./components/Services/Services";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Hero />
        <Info />
        <Services />
      </GlobalProvider>
    </div>
  );
}

export default App;
