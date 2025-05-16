import React, { useState, useEffect } from "react";
import './App.css'; 
import Hero from './components/Hero/Hero'; 
import Navbar from './components/Navbar/Navbar';
import GridD from './components/GridD/GridD';
import AdBlank from './components/AdBlank/AdBlank';
import D from './components/d/D';  // Import D component
import Footer from './components/Footer/Footer';
import Plusup from './components/Plusup/Plusup';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GridD />
      <AdBlank />
      {isSmallScreen && <D />} {/* Render only on small screens */}
      <Plusup />
      <Footer />
    </div>
  );
};

export default App;
