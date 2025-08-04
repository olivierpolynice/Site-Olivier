import React from "react";

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>💻 Compétences & Certifications</h2>

      <div style={styles.container}>
        {/* ✅ Compétences techniques */}
        <div style={styles.column}>
          <h3 style={styles.subtitle}>🛠️ Compétences techniques</h3>
          <ul>
            <li><strong>Cloud :</strong> AWS (EC2, S3, RDS, IAM), Azure (VM, Blob Storage, VNet)</li>
            <li><strong>Cybersécurité :</strong> IAM, Data Loss Prevention (DLP), Wireshark, Metasploit</li>
            <li><strong>DevOps :</strong> Docker, Ansible, GitHub Actions</li>
            <li><strong>Systèmes & Réseaux :</strong> Linux (Debian/Ubuntu), Windows Server (AD), TCP/IP, VLAN, VPN, CCNA 1‑3</li>
            <li><strong>Langages / Scripts :</strong> Python, Bash, PowerShell, Go (bases)</li>
          </ul>
        </div>

        {/* ✅ Certifications */}
        <div style={styles.column}>
          <h3 style={styles.subtitle}>📜 Certifications</h3>
          <ul>
            <li>CCNA 1, 2, 3 – Attestation obtenue</li>
            <li>Cisco Introduction to Cybersecurity – En cours</li>
            <li>Fortinet NSE 1 – Prévu</li>
          </ul>

          <h3 style={{ ...styles.subtitle, marginTop: "20px" }}>🎯 Certifications à venir</h3>
          <ul>
            <li>AWS Certified Cloud Practitioner – Prévu</li>
            <li>Microsoft Azure Fundamentals (AZ‑900) – Prévu</li>
          </ul>
        </div>

        {/* ✅ Soft Skills */}
        <div style={styles.column}>
          <h3 style={styles.subtitle}>🤝 Soft Skills</h3>
          <ul>
            <li>Rigueur et sens de l’organisation</li>
            <li>Résolution de problèmes techniques</li>
            <li>Travail en équipe et communication</li>
            <li>Capacité d’apprentissage rapide</li>
            <li>Adaptabilité aux nouvelles technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "100px 20px", backgroundColor: "#f9f9f9" },
  title: { fontSize: "28px", textAlign: "center", marginBottom: "30px" },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1100px",
    margin: "auto",
  },
  column: {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  subtitle: { fontSize: "20px", marginBottom: "10px", color: "#007BFF" },
};
