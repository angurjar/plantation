// Import necessary modules and components

"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Image from "next/image";

import styles from "../styles/about.module.css";
import Registration from "../registration/page"; // Import the Registration component

// Import images

const About: React.FC = () => {
  const [participated, setParticipated] = useState(false);

  const handleParticipate = () => {
    // Redirect to registration page
    window.location.href = "/registration"; // Replace '/registration' with the actual route to your registration page
  };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.header}>
        <h1>About Plantation Service</h1>
        <p>
          Human well-being: Nature provides numerous benefits to human
          well-being, including clean air and water, food, medicine, and
          recreational opportunities. Protecting and preserving nature is
          essential for ensuring the health and prosperity of present and future
          generations. Spiritual and cultural significance: Nature holds
          spiritual and cultural significance for many societies around the
          world. It has inspired awe, wonder, and reverence in people for
          centuries, shaping art, literature, religion, and traditions.
        </p>
      </div>
      <main className={styles.aboutMain}>
        <section className={`${styles.aboutSection} ${styles.left}`}>
          <div
            className={`${styles.card} ${styles.largeGap} ${styles.largeCard}`}
          >
            <Image
              src="/mission.jpeg"
              alt="Mission"
              className={styles.cardImage}
              width={500}
              height={300}
            />
            <h2>Our Mission</h2>
            <p>
              We are committed to promoting green spaces and environmental
              sustainability through our plantation service.
            </p>
          </div>
        </section>
        <section className={`${styles.aboutSection} ${styles.right}`}>
          <div
            className={`${styles.card} ${styles.mediumGap} ${styles.mediumCard}`}
          >
            <Image
              src="/benefit.jpeg"
              alt="Benefits"
              className={styles.cardImage}
              width={300}
              height={100}
            />
            <h2>Benefits</h2>
            <ul>
              <li>Enhanced aesthetics</li>
              <li>Improved air quality</li>
              <li>Biodiversity preservation</li>
            </ul>
          </div>
        </section>
        <section
          className={`${styles.aboutSection} ${styles.left} ${styles.spaced}`}
        >
          <div
            className={`${styles.card} ${styles.smallGap} ${styles.smallCard}`}
          >
            <Image
              src="/services.jpeg"
              alt="Services"
              className={styles.cardImage}
              width={500}
              height={300}
            />
            <h2>Our Services</h2>
            <ul>
              <li>Tree planting</li>
              <li>Gardening consultation</li>
              <li>Landscaping design</li>
            </ul>
          </div>
        </section>
        <section className={`${styles.aboutSection} ${styles.right}`}>
          <div
            className={`${styles.card} ${styles.smallestGap} ${styles.smallestCard}`}
          >
            <Image
              src="/logo2.png"
              alt="Contact"
              className={styles.cardImage}
              width={500}
              height={300}
            />
            <h2>Contact Us</h2>
            <p>Email: contact@plantationservice.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Green Street, Nature City, Earth</p>
          </div>
        </section>
        <section className={`${styles.aboutSection} ${styles.left}`}>
          <div
            className={`${styles.card} ${styles.smallGap} ${styles.smallCard}`}
          >
            <Image
              src="/connect.jpeg"
              alt="Connect"
              className={styles.cardImage}
              width={500}
              height={300}
            />
            <h2>Connect With Us</h2>
            <div className={styles.socialMedia}>
              <a href="https://facebook.com">
                <FaFacebookSquare size={40} color="#3b5998" />
              </a>
              <a href="https://twitter.com">
                <FaTwitterSquare size={40} color="#00acee" />
              </a>
              <a href="https://instagram.com">
                <FaInstagramSquare size={40} color="#c13584" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        {!participated ? (
          <div className="mt-8">
            <Link href="/registration" passHref>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition duration-300">
                participate-here
              </button>
            </Link>
          </div>
        ) : (
          <p>You have participated in our mission!</p>
        )}
        <p>&copy; 2024 Plantation Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
