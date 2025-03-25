import { useState } from "react";
// import '../estilo/main.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Aquí puedes conectar con tu API
  };

  return (
    <div class="auth-container">
        <main className="form-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} >
                <div class="input-container">
                <input
                    type="text" //type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label for="email" class="label">Email:</label>
                <div class="underline"></div>
                </div>
                <div class="input-container">
                <input
                    type="text"//type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                            <label for="password" class="label">Contraseña:</label>
                <div class="underline"></div>
                </div>
                <button type="submit" class="full-width">Iniciar sesión</button>
            </form>
            <div>
                ¿No tienes cuenta? <a href="/register">Ir al registro</a>
                <br />
                <a href="/">Ir al home</a>
            </div>
        </main>
    </div>
  );
}

export default Login;
