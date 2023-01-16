import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home";
import { Changelog } from "./Page/Changelog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/:id" element={<Changelog />} exact /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
