import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import Home from './components/Home';
import About from './components/About';
import "./i18n"


function App() {
  return (
    <Router>
      <div>
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
