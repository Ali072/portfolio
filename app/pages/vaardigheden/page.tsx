"use client";

import Navbar from "../../component/Navbar";
import styles from "./vaardigheden.module.css"; // Voeg je CSS-bestand toe

export default function Vaardigheden() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Vaardigheden</h1>
        <p className={styles.intro}>
          Hier zijn een paar vaardigheden die ik in de loop der tijd heb ontwikkeld:
        </p>

        <div className={styles.skillsContainer}>
          <div className={styles.skillCard}>
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Database Management</h3>
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Other Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
