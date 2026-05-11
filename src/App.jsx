import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
