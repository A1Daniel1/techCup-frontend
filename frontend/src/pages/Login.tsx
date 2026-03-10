import { useState } from "react";
import { login } from "../services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email.endsWith("@universidad.edu")) {
      alert("Debe usar un correo institucional");
      return;
    }
  
    try {
      const user = await login(email, password);
  
      console.log("Usuario autenticado:", user);
  
    } catch (error) {
      alert("Correo o contraseña incorrectos");
    }
  };
  
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>TechCup Futbol</h1>
        <p style={styles.subtitle}>Inicio de sesión</p>

        <form onSubmit={handleSubmit} style={styles.form}>

          <label>Correo institucional</label>
          <input
            type="email"
            placeholder="usuario@escuelaing.edu.co"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },

  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },

  title: {
    textAlign: "center" as const,
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center" as const,
    color: "#666",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "green",
    color: "white",
    fontWeight: "bold" as const,
    cursor: "pointer",
  },
};