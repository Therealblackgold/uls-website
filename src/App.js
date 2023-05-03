import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Team from "./pages/Team";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="training" element={<Training />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
