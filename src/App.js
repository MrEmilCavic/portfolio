import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Header';
import Links from './Links';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  const [loadBg, setLoadBg] = useState(false);
  const [loadHeader, setLoadHeader] = useState(false);
  const [loadAbout, setLoadAbout] = useState(false);
  const [loadProj, setLoadProj] = useState(false);

  useEffect(() => {
    const timeoutBg = setTimeout(() => {
      setLoadBg(true);
    }, 4500);
    return () => clearTimeout(timeoutBg);
  }, []);
  

  return (
    <div id="App" className='font-sans h-[3480px] overflow-hidden relative
           bg-large bg-bgdark'>
        <Header />
        {loadBg &&
        <div>
        <Links />
        <div className="flex flex-col lg:flex-row ">
          <Hero />
          <Projects />
        </div>
        <Footer />
        </div>
        }
    </div>
  );
}

export default App;
