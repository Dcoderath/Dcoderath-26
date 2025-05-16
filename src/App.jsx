import React from 'react';
import './App.css';  // Importing the App styles
import Hero from './components/Hero/Hero'; // Import the Hero component
import Navbar from './components/Navbar/Navbar';
import GridD from './components/GridD/GridD';
import AdBlank from './components/AdBlank/AdBlank';

import Footer from './components/Footer/Footer';

import Plusup from './components/Plusup/Plusup';


const App = () => {
  return (
    <div className="App">
        
      <Navbar />
      <Hero /> {/* Using the Hero component here */}      
      <GridD />
      <AdBlank />
      <Plusup />
      

      <Footer />
    </div>
  );
};

export default App;
