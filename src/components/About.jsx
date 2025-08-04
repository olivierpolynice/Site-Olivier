import React from "react";

export default function About() {
  return (
    <section id="about" className="about-animated">
      <div style={styles.container}>
        <img
  src="/photo-olivier.jpg"
  alt="Olivier Polynice"
  style={styles.image}
/>

        <div style={styles.text}>
          <h2 style={styles.title}>Olivier Polynice</h2>
          <h3 style={styles.subtitle}>Futur Expert en Cybersécurité & Cloud</h3>
          <p style={styles.description}>
            Passionné par la cybersécurité, le cloud computing et les réseaux,
            je suis diplômé d’une Licence en Cybersécurité, Cloud et Systèmes
            Réseaux et je prépare actuellement un Master 1.  
            Mon objectif est de devenir un expert en sécurisation
            d’infrastructures, déploiement cloud (AWS, Azure) et administration
            systèmes.
          </p>

          <div style={styles.buttons}>
            <a href="/cv-olivier-polynice.pdf" download className="btn btn-dark">
              📄 Télécharger CV
            </a>
            <a href="#contact" className="btn">
              ✉️ Me contacter
            </a>
            <p style={styles.social}>
  👉 <a href="https://www.linkedin.com/in/olivier-polynice/" target="_blank" rel="noreferrer">
    Voir mon profil LinkedIn
  </a>
</p>

          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    maxWidth: "900px",
    margin: "auto",
    flexWrap: "wrap",
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  text: { flex: 1, minWidth: "250px" },
  title: { fontSize: "32px", marginBottom: "8px", color: "#111827" },
  subtitle: { fontSize: "20px", color: "#4f46e5", marginBottom: "15px" },
  description: { fontSize: "16px", color: "#374151", marginBottom: "20px" },
  buttons: { display: "flex", gap: "12px", flexWrap: "wrap" },
  social: {
  marginTop: "15px",
  fontSize: "14px",
},

};
