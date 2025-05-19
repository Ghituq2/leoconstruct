import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
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
