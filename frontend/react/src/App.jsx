import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas
import HomePage from "./paginas/Home";
import LoginPage from "./paginas/Login";
import RegisterPage from "./paginas/Register";
import AccessibilityPage from "./paginas/Accesibilidad";

// Proveedores
import { ThemeProvider } from './paginas/ThemeContext';
import Navbar from './paginas/components/Navbar/Navbar';
import Footer from './paginas/components/Footer/Footer';
import Portfolio from './paginas/Portfolio';

function App() {
  return (
    <div className="App">
        <ThemeProvider>
            <Navbar/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            </BrowserRouter>
            <Footer/>
        </ThemeProvider>
    </div>
  );
}

export default App;
