import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarItem from "./components/navbar/index.jsx";
import HomePage from "../src/pages/Home.jsx";
function App() {
  return (
    <>
      <Router>
        <NavbarItem />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
