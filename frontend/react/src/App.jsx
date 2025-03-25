import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AccessibilityPage from "./pages/Accesibilidad";

// Proveedores
import { ThemeProvider } from './pages/ThemeContext';
import Navbar from './pages/components/Navbar/Navbar';
import Footer from './pages/components/Footer/Footer';
import Portfolio from './pages/Portfolio';

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
