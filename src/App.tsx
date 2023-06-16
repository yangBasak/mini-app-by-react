import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/global.scss";
import Navbar from "./components/navBar";
// 페이지 삽입
import PageHome from "./pages/pageHome";
import PageInfinity from "./pages/PageInfinity";

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
