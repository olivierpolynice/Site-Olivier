import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Déployer une app full-stack sur AWS avec Docker",
    date: "04 août 2025",
    summary:
      "Retour d’expérience sur le déploiement d’une application React / Node.js sur AWS avec Terraform, Docker et GitHub Actions.",
  },
  {
    id: 2,
    title: "Pourquoi je me forme à la cybersécurité, au cloud et aux réseaux ?",
    date: "30 juillet 2025",
    summary:
      "Je t’explique mon parcours, mes objectifs, et pourquoi j’ai choisi ces domaines pour devenir un futur expert.",
  },
  {
    id: 3,
    title: "JWT, Auth, et sécurisation de projet web : ce que j’ai appris",
    date: "15 juillet 2025",
    summary:
      "Une introduction aux JSON Web Tokens et comment je les ai utilisés pour sécuriser mon projet AcadConnect.",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={styles.section}>
      <h2 style={styles.title}>📝 Blog Technique</h2>
      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{post.title}</h3>
            <p style={styles.date}>{post.date}</p>
            <p style={styles.summary}>{post.summary}</p>
            <button style={styles.button}>📖 Lire plus</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "30px",
    color: "#4f46e5",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "20px",
    width: "320px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },
  date: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "10px",
  },
  summary: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
