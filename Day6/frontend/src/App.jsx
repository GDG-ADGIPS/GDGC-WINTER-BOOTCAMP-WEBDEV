import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./pages/Mainpage";

import "./App.css";
import Searchedpage from "./pages/Searchedpage";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<Mainpage />} path="/home"></Route>
          <Route element={<Searchedpage />} path="/search"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
