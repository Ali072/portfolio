"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../../component/Navbar";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_3tef2dv",      // Vervang met je Service ID
        "template_hxxig29",     // Vervang met je Template ID
        { 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "iiIKDTgJCQopq7N1q"        // Vervang met je Public Key
      );

      if (result.text === "OK") {
        setSuccessMessage("Je bericht is verzonden!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Fout bij het verzenden:", JSON.stringify(error, null, 2));
      setErrorMessage("Er is iets misgegaan. Probeer het opnieuw.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.title}>Contactformulier</h2>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Verstuur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
