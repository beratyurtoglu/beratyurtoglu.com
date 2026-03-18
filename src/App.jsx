import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Anasayfa from "./sayfalar/Anasayfa";
import Hakkimda from "./sayfalar/Hakkimda";
import Portfolyom from "./sayfalar/Portfolyom";
import Iletisim from "./sayfalar/Iletisim";
import VideoPortfolyo from "./sayfalar/VideoPortfolyo";
import YazilimPortfolyo from "./sayfalar/YazilimPortfolyo";
import Logo from "./komponentler/Logo";
import Admin from "./sayfalar/Admin";

function App() {
  const location = useLocation();

  return (
    <>
      <Logo />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimda" element={<Hakkimda />} />
          <Route path="/portfolyom" element={<Portfolyom />}>
            <Route path="video_portfolyo" element={<VideoPortfolyo />} />
            <Route path="yazilim_portfolyo" element={<YazilimPortfolyo />} />
          </Route>
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
