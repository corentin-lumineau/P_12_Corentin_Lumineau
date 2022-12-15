import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Header from './components/Header';
import Show from './pages/Show'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show/:userId" element={<Show />}></Route>
      </Routes>
    </Router>
);
