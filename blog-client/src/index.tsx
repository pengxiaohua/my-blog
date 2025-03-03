import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import BlogDetail from "./pages/BlogDetail";
import EssayAndReading from "./pages/EssayAndReading";
import Tech from "./pages/Tech";
import Web3 from "./pages/Web3";
import Thinking from "./pages/Thinking";
import Layout from "./components/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/essay-and-reading" element={<EssayAndReading />} />
        <Route path="/thinking" element={<Thinking />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path={`/blog/:id`} element={<BlogDetail />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
