import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Développeur Web - IT Achieve",
      description:
        "Stage où j’ai conçu et mis en ligne le site vitrine de l’entreprise avec intégration de fonctionnalités dynamiques et déploiement sur serveur.",
      technologies: "HTML • CSS • JavaScript",
      buttons: [
        { text: "🌐 Voir le site", link: "https://www.itachieve.fr/" }
      ]
    },
    {
      title: "Tests de pénétration éthique sur Metasploitable2",
      description:
        "Simulation d’attaques réelles pour identifier et corriger les vulnérabilités, incluant force brute, reconnaissance et collecte d’informations.",
      technologies: "Metasploit • Wireshark • Kali Linux",
      buttons: []
    },
    {
      title: "Déploiement sécurisé d’une infrastructure Cloud AWS",
      description:
        "Mise en place de services EC2, S3 et RDS avec gestion des accès via IAM et application de bonnes pratiques de sécurisation cloud.",
      technologies: "AWS (EC2, S3, RDS, IAM)",
      buttons: []
    },
    {
      title: "Analyse de Données pour TPE",
      description:
        "Application web interactive permettant aux TPE d’importer leurs fichiers CSV, de visualiser leurs statistiques clés et d’exporter les résultats filtrés pour faciliter la prise de décision.",
      technologies: "Python • Pandas • Matplotlib • Streamlit • GitHub • Streamlit Cloud",
      buttons: [
        { text: "🌐 Voir l'application", link: "https://dataanalysisapp-cdzt6dtqcfujmrebq2hwvf.streamlit.app/" }
      ]
    },
    {
      title: "Déploiement App Web sur AWS",
      description:
        "Application full‑stack déployée sur AWS avec Terraform, Docker et CI/CD via GitHub Actions.",
      technologies: "React • Node.js • AWS • Docker • Terraform • GitHub Actions",
      buttons: []
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>🚀 Mes Projets</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDesc}>{project.description}</p>
            <p style={styles.tech}>{project.technologies}</p>

            <div style={styles.buttonsContainer}>
              {project.buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.button}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    backgroundColor: "#fafafa",
    textAlign: "center",
  },
  title: { fontSize: "28px", marginBottom: "30px" },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "20px",
    width: "350px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  cardTitle: { fontSize: "20px", marginBottom: "10px", color: "#222" },
  cardDesc: { fontSize: "14px", color: "#555", marginBottom: "10px" },
  tech: {
    fontSize: "13px",
    fontStyle: "italic",
    color: "#444",
    marginBottom: "10px",
  },
  buttonsContainer: { display: "flex", gap: "10px", flexWrap: "wrap" },
  button: {
    display: "inline-block",
    padding: "8px 12px",
    backgroundColor: "#007BFF",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "14px",
  },
};
