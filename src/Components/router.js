import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home.js"
import Portf from "../Pages/Portf";

export default function RouterMain() {
    return (
      <Router>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portf" element={<Portf />}></Route>
      </Routes>
    </Router>
    );
  }
  