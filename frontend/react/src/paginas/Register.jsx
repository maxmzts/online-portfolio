import React, { useState } from "react";
import FormField from "./components/FormField";  
import ErrorMessage from "./components/ErrorMessage";  

function Register() {
  // Estado para almacenar los valores de los campos del formulario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  // Estado para almacenar los mensajes de error
  const [errorMessage, setErrorMessage] = useState("");

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Función que maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "lastName") setLastName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    if (name === "photo") setPhoto(e.target.files[0]);
  };

  // Función para validar el nombre (50 caracteres máximo)
  const validateName = () => {
    if (name.length > 50) {
      setErrorMessage("El nombre no debe exceder los 50 caracteres.");
      return false;
    }
    return true;
  };

  // Función para validar el apellido (100 caracteres máximo)
  const validateLastName = () => {
    if (lastName.length > 100) {
      setErrorMessage("El apellido no debe exceder los 100 caracteres.");
      return false;
    }
    return true;
  };

  // Función para manejar la validación del correo electrónico cuando el campo pierde el foco
  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrorMessage("El correo electrónico tiene un formato incorrecto.");
    }
  };

  // Función para manejar la validación de las contraseñas cuando el campo pierde el foco
  const handlePasswordBlur = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
    } else {
      setErrorMessage("");  // Limpiar error si las contraseñas coinciden
    }
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!name || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    if (!photo) {
      setErrorMessage("Debes subir una foto.");
      return;
    }

    // Si todo está bien, enviar los datos al backend
    // Resetear el formulario después de un registro exitoso
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoto(null);
    setErrorMessage("");  // Limpiar el mensaje de error
  };

  return (
    <div className="Register">
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          id="name"
          label="Nombre"
          type="text"
          value={name}
          onChange={handleInputChange}
          onBlur={validateName}  // Validar cuando el campo pierde el foco
          required
        />
        <FormField
          id="lastName"
          label="Apellido"
          type="text"
          value={lastName}
          onChange={handleInputChange}
          onBlur={validateLastName}  // Validar cuando el campo pierde el foco
          required
        />
        <FormField
          id="email"
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={handleInputChange}
          onBlur={handleEmailBlur}  // Validar correo electrónico cuando el campo pierde el foco
          required
        />
        <FormField
          id="password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={handleInputChange}
          onBlur={handlePasswordBlur}  // Validar contraseñas cuando el campo pierde el foco
          required
        />
        <FormField
          id="confirmPassword"
          label="Repetir Contraseña"
          type="password"
          value={confirmPassword}
          onChange={handleInputChange}
          onBlur={handlePasswordBlur}  // Validar contraseñas cuando el campo pierde el foco
          required
        />

        {/* Mostrar el mensaje de error */}
        {errorMessage && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
        
        <div>
          <label htmlFor="photo">Sube una foto:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <br />
      <a href="/login">Ir al login</a>
      <br />
      <a href="/">Ir al home</a>
    </div>
  );
}

export default Register;
