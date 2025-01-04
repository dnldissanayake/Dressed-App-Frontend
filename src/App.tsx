import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import PostDesign from './pages/Designer/Designer.tsx';
import ViewDesigns from './pages/Supplier/Supplier.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PostDesign />} />
        <Route path="/supplier" element={<ViewDesigns />} />
      </Routes>
    </div>
  );
}

export default App;
