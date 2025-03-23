import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas
import HomePage from "./paginas/Home";
import LoginPage from "./paginas/Login";
import RegisterPage from "./paginas/Register";
import AccessibilityPage from "./paginas/Accesibilidad";

// Proveedores
import { ThemeProvider } from './paginas/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
