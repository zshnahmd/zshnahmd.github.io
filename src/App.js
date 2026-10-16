import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen pt-10">
        <Header />
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects/*" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
