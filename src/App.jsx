import About from "./component/About"
import Contect from "./component/Contect"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

