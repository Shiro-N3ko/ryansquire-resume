import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
