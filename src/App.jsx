import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Citizens from "./components/Citizens";

export const App = () => {
  return (
    <div>
        <Header />
        <About />
        <Services />
        <Citizens />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
