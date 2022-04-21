import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Services from "./components/Services/Services";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext";
import Speciality from "./components/Speciality/Speciality";
import Appointment from "./components/Appointment/Appointment";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Hero />
        <Info />
        <Services />
        <Speciality />
        <Appointment />
        <Team />
      </GlobalProvider>
    </div>
  );
}

export default App;
