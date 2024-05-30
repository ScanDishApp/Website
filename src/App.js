import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Team from "./pages/InfoPage";
import Prosjekt from "./pages/ProjectPage";
import Footer from "./components/Footer";
import Visuell from "./pages/GrafiskPage";
import LastNed from "./pages/InstallPage";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Team" element={<Team />} />
        <Route exact path="/Prosjekt" element={<Prosjekt />} />
        <Route exact path="/Visuell" element={<Visuell />} />
        <Route exact path="/Prosjekt" element={<Prosjekt />} />
        <Route exact path="/LastNed" element={<LastNed />} />

        {/* Add more routes here if needed */}
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
