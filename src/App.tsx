import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import Loader from "./components/Loader/Loader";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  // const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  // const contextValue: CountryContextType = {
  //   selectedCountries,
  //   setSelectedCountries,
  // };

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/year/:year/month/:month/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
