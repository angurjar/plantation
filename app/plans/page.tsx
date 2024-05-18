"use client";
import React, { useState } from "react";
import styles from "../styles/plans.module.css";

interface FormData {
  name: string;
  email: string;
  date: string;
  treeType: string;
}

const Plans: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    treeType: "",
  });
  const [confirmation, setConfirmation] = useState<FormData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setConfirmation(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderTreeTypes = (): JSX.Element | null => {
    if (formData.treeType === "flowers") {
      return (
        <ul>
          <li>Rose</li>
          <li>Lily</li>
          <li>Tulip</li>
        </ul>
      );
    } else if (formData.treeType === "fruits") {
      return (
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
        </ul>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <h1>Choose Your Tree Type:</h1>
      <select name="treeType" onChange={handleChange} required>
        <option value="">Select Tree Type</option>
        <option value="flowers">Flowers</option>
        <option value="fruits">Fruits</option>
      </select>

      {/* Display the list of tree types based on user selection */}
      {formData.treeType && renderTreeTypes()}

      <h2>Book Plantation</h2>
      {confirmation ? (
        <div className={styles.confirmation}>
          <h3>Booking Confirmation:</h3>
          <p>Name: {confirmation.name}</p>
          <p>Email: {confirmation.email}</p>
          <p>Date: {confirmation.date}</p>
          <p>Tree Type: {confirmation.treeType}</p>
          <p>A confirmation email will be sent to you.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} required />
          </label>
          <label>
            Preferred Date:
            <input type="date" name="date" onChange={handleChange} required />
          </label>
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
};

export default Plans;
