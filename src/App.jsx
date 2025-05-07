import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DailyUpdates from './pages/DailyUpdates';
import Gallery from './pages/Gallery';
import Staff from './pages/Staff';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<DailyUpdates />} />
          <Route path="/updates/:id" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;