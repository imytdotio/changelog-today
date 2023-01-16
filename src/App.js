import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home";
// import { Changelog } from "./Page/Changelog";
import { Create } from "./Page/Create";
import { Nav } from "./Components/Nav";
import { ProfileEdit } from "./Page/ProfileEdit";
import { User } from "./Page/User";

function App() {
  return (
    <div className="App p-8">
      <BrowserRouter>
        <h1 className="font-bold text-4xl mb-8">Changelog-today</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/create" element={<Create />} exact />
          <Route path="/profile" element={<ProfileEdit />} exact />
          {/* <Route path="/changelog/:id" element={<Changelog />} exact /> */}
          <Route path="/:user" element={<User />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
