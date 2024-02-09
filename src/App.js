import logo from "./logo.svg";
import "./App.css";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Template from "./components/template/Template";

function App() {
  return (
    <>
    <Router basename="/a">
      <Routes>
        <Route path="/" element={<Template/>} />
        <Route path="/a/b" element={<Template/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
