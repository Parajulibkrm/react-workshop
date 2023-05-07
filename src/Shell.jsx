import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import SingleTweet from "./Pages/SingleTweet";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const Shell = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tweet/:id" element={<SingleTweet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
