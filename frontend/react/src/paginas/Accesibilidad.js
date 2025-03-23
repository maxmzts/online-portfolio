import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

function Accesibilidad() {
  const { theme, isDyslexic, setFont, setThemePreference } = useContext(ThemeContext);

  // Estados locales para los inputs
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [selectedFont, setSelectedFont] = useState(isDyslexic ? 'dyslexic' : 'inter');

  // Actualizar estados cuando cambien en el contexto
  useEffect(() => {
    setSelectedTheme(theme);
    setSelectedFont(isDyslexic ? 'dyslexic' : 'inter');
  }, [theme, isDyslexic]);

  // Manejo de cambios
  const handleThemeChange = (event) => setSelectedTheme(event.target.value);
  const handleFontChange = (event) => setSelectedFont(event.target.value);

  // Aplicar cambios en el botón
  const applyChanges = () => {
    setThemePreference(selectedTheme);
    setFont(selectedFont);
  };

  return (
    <main>
      <h1>Accesibilidad</h1>
      <p>Personaliza la interfaz para mejorar la accesibilidad según tus necesidades.</p>

      <h2>Color de la interfaz</h2>
      <fieldset>
        <legend>Selecciona un tema:</legend>

        <div>
          <input type="radio" id="claro" name="theme" value="claro" checked={selectedTheme === 'claro'} onChange={handleThemeChange} />
          <label htmlFor="claro">Tema claro (por defecto)</label>
        </div>

        <div>
          <input type="radio" id="oscuro" name="theme" value="oscuro" checked={selectedTheme === 'oscuro'} onChange={handleThemeChange} />
          <label htmlFor="oscuro">Tema oscuro</label>
        </div>

        <div>
          <input type="radio" id="tritanopia" name="theme" value="tritanopia" checked={selectedTheme === 'tritanopia'} onChange={handleThemeChange} />
          <label htmlFor="tritanopia">Tema para daltónicos (tritanopia)</label>
        </div>
      </fieldset>

      <h2>Estilo de fuente</h2>
      <fieldset>
        <legend>Selecciona una tipografía:</legend>

        <div>
          <input type="radio" id="inter" name="font" value="inter" checked={selectedFont === 'inter'} onChange={handleFontChange} />
          <label htmlFor="inter">Legible (por defecto)</label>
        </div>

        <div>
          <input type="radio" id="dyslexic" name="font" value="dyslexic" checked={selectedFont === 'dyslexic'} onChange={handleFontChange} />
          <label htmlFor="dyslexic">Para dislexia</label>
        </div>
      </fieldset>

      <button onClick={applyChanges}>Aplicar cambios</button>
    </main>
  );
}

export default Accesibilidad;
