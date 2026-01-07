import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
