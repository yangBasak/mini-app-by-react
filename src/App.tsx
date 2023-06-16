import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/pageHome";
import PageInfinity from "./pages/pageInfinity";
import Navbar from "./components/navBar";
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Navbar />
        <Routes>
          <Route key="key1" path="/" element={<PageHome />}></Route>
          <Route key="key2" path="/infinity" element={<PageInfinity />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
