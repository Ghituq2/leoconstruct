import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="servicii" element={<Home />} />
          <Route path="proiecte" element={<Home />} />
          <Route path="contact" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
