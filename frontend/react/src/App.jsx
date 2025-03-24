import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas
import HomePage from "./paginas/Home";
import LoginPage from "./paginas/Login";
import RegisterPage from "./paginas/Register";
import AccessibilityPage from "./paginas/Accesibilidad";

// Proveedores
import { ThemeProvider } from './paginas/ThemeContext';
import Navbar from './paginas/components/Navbar/Navbar';
import Hero from './paginas/components/Hero/Hero';
import About from './paginas/components/About/About';
import Projects from './paginas/components/Projects/Projects';
import Contact from './paginas/components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      {/* <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider> */}
    </div>
  );
}

export default App;
