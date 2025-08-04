import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Olivier Polynice</p>
      <div style={styles.links}>
        <a
          href="https://www.linkedin.com/in/olivierpolynice/"
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/olivierpolynice"
          target="_blank"
          rel="noreferrer"
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "20px",
    background: "#1f2937",
    color: "#fff",
    textAlign: "center",
    marginTop: "60px",
  },
  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  iconLink: {
    color: "#fff",
    fontSize: "20px",
    transition: "0.3s ease",
  },
};
