import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Home from './page/Home';
import About from './page/About';
import Skills from './page/Skills';
import Services from './page/Services';
import Projects from './page/Projects';
import Contact from './page/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;