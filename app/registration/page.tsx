"use client";
import React, { useState } from "react";
import Link from "next/link";
const Registration: React.FC = () => {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic
    // For example, you can set a flag to indicate registration
    setRegistered(true);
    // You can also redirect back to the About page after registration
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleRegistration} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <div>
        <div>
          <Link href="/thankyou">
            <span className="text-blue-500 hover:underline">
              welocome and go to Thank You page
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .registration-container {
          max-width: 400px;
          margin: auto;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          font-weight: bold;
        }

        input[type="text"],
        input[type="email"] {
          padding: 0.5rem;
          width: 100%;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .submit-button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Registration;
