import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Articles from "./pages/Articles";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
