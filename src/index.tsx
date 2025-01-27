import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import BlogDetail from "./pages/BlogDetail";
import BackStage from "./pages/BackStage";
import EssayAndReading from "./pages/EssayAndReading";
import Tech from "./pages/Tech";
import Web3 from "./pages/Web3";
import Thinking from "./pages/Thinking";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/web3" element={<Web3 />} />
      <Route path="/essay-and-reading" element={<EssayAndReading />} />
      <Route path="/thinking" element={<Thinking />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path={`/blog/:id`} element={<BlogDetail />} />
      <Route path="/back-stage" element={<BackStage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
