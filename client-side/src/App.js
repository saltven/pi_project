import './scss/styles.js';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pi from "./views/Pi";
import Sun from "./views/Sun";

function App() {
  return (
    <div className="App master-padding">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pi" element={<Pi/>} />
        <Route path="/sun" element={<Sun/>} />
      </Routes>
    </div>
  );
}

export default App;
