import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("⏳ Envoi en cours...");

    emailjs
      .send(
        "service_rju0wnr", // ✅ Remplace par ton Service ID
        "template_6b22ki5", // ✅ Ton Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "PIvoa8F0jRJGTr6fe" // ✅ Ta Public Key
      )
      .then(
        () => {
          setStatus("✅ Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Erreur lors de l'envoi. Réessaie !");
        }
      );
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>📩 Contact</h2>
        <p style={styles.subtitle}>Remplissez le formulaire pour m'envoyer un message directement !</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>📨 Envoyer</button>
        </form>

        {status && <p style={{ marginTop: "10px" }}>{status}</p>}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "100px 20px", backgroundColor: "#f5f5f5", textAlign: "center" },
  container: { maxWidth: "500px", margin: "auto" },
  title: { fontSize: "28px", marginBottom: "10px" },
  subtitle: { fontSize: "16px", marginBottom: "20px", color: "#555" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#222",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
