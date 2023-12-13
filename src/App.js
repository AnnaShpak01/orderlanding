import React from 'react';
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Portfolio />
      <Clients />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
