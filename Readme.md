# 🏗️ Usabilidad y Accesibilidad 2025  

## 📂 Estructura de la Base de Datos (Sujeta a cambios)  

### **VerificacionEmail**  
| Campo | Descripción |
|--------|------------|
| `ID` | Identificador único |
| `UserID` | ID del usuario asociado |
| `Codigo` | Código de verificación |

### **Usuario**  
| Campo | Descripción |
|--------|------------|
| `ID` | Identificador único |
| `Nombre` | Nombre del usuario |
| `Apellidos` | Apellidos del usuario |
| `Email` | Correo electrónico |
| `EmailVerificado` | Estado del correo (`true` / `false`) |
| `HashContraseña` | Hash de la contraseña |
| `SaltContraseña` | Salt para la contraseña |
| `FotoPerfil` | URL de la foto de perfil |

### **Ajustes**  
| Campo | Descripción |
|--------|------------|
| `UserID` | ID del usuario asociado |
| `Tema` | Tema visual (`0` = claro, `1` = oscuro, `2` = claro tritanopia) |
| `TamañoFuente` | Tamaño de fuente (`0` = normal, `1` = mediano, `2` = grande) |

### **Colecciones** *(Incompleto)*  
| Campo | Descripción |
|--------|------------|
| `ID` | Identificador único |
| `UserID` | ID del usuario propietario |

### **Assets** *(Incompleto)*  
| Campo | Descripción |
|--------|------------|
| `ID` | Identificador único |
| `UserID` | ID del usuario propietario |

---

## 🔑 Pasos del Login  

### **Frontend**  
1️⃣ Se reciben los datos del formulario y se validan los campos.  
2️⃣ Se envían los datos al backend con la contraseña hasheada.  

### **Backend**  
3️⃣ Se vuelve a hashear la contraseña y se compara con la almacenada.  
4️⃣ Si la verificación es correcta, se devuelve un token JWT.  

### **Frontend**  
5️⃣ Se almacena el token en la sesión.  

---

## 📝 Pasos del Registro  

### **Frontend**  
1️⃣ Se reciben los datos del formulario y se validan los campos.  
2️⃣ Se envían los datos al backend con la contraseña hasheada.  

### **Backend**  
3️⃣ Se verifica si el email ya está registrado.  
4️⃣ Se genera un hash de la contraseña con su salt.  
5️⃣ Se almacena el usuario en la base de datos.  
6️⃣ Se genera un código de verificación para el email.  
7️⃣ Se almacena el código en la base de datos.  
8️⃣ Se devuelve la respuesta con el token JWT.  

### **Frontend**  
9️⃣ Se almacena el token en la sesión.  

---

## 📌 Rutas de Express  

| Ruta | Método | Descripción |
|------|--------|------------|
| **`/login`** | `POST` | Recibe email y hash de contraseña. Devuelve un token JWT si es exitoso. |
| **`/register`** | `POST` | Recibe los datos de la cuenta, hash de contraseña y foto. Devuelve un token JWT si es exitoso. |
| **`/user`** | `GET` | Requiere token JWT. Devuelve nombre, apellidos, email y foto del usuario. |
| **`/user/settings`** | `GET` | Requiere token JWT. Devuelve los ajustes del usuario. |
| **`/user/assets`** | `GET` | Requiere token JWT. Devuelve los assets del usuario. |
| **`/user/collections`** | `GET` | Requiere token JWT. Devuelve las colecciones del usuario. |
| **`/collections/`** | `GET` | Parámetros de búsqueda (texto, categoría, etc.). Devuelve colecciones de acceso público. |
| **`/assets/`** | `GET` | Parámetros de búsqueda (texto, categoría, etc.). Devuelve assets de acceso público. |
| **`/collections/{id}`** | `GET` | Requiere token JWT. Devuelve una colección por ID si el usuario tiene permiso. |
| **`/assets/{id}`** | `GET` | Requiere token JWT. Devuelve un asset por ID si el usuario tiene permiso. |
