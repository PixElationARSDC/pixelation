import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/Hero/HeroPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage/>} />
        <Route path="/home" element={<HeroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
