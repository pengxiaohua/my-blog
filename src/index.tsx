import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, unstable_HistoryRouter as Router } from "react-router-dom";

import { customHistory } from './utils';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import BlogDetail from './pages/BlogDetail'
import BackStage from './pages/BackStage';
import EssayAndReading from './pages/EssayAndReading';
import Tech from './pages/Tech';
import Web3 from './pages/Web3';
import Thinking from './pages/Thinking';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/essay-and-reading" element={<EssayAndReading />} />
        <Route path="/thinking" element={<Thinking />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path={`/blog-detail/:id`} element={<BlogDetail />} />
        <Route path="/back-stage" element={<BackStage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
