"use client";
import React, { useState } from "react";
import styles from "../styles/plans.module.css";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  date: string;
  address: string;
  treeType: string;
  plantSelections: Record<string, number>;
  farmer: string;
}

const farmers = [
  {
    name: "Farmer A",
    description: "Expert in plantations.",
    image: "/farmer.png",
  },
  {
    name: "Farmer B",
    description: "Specializes in flowers.",
    image: "/image.jpg",
  },
];

const flowers = [
  { name: "Rose", image: "/rose.jpg" },
  { name: "Lily", image: "/lily.jpg" },
  { name: "Tulip", image: "/tulip.jpg" },
  { name: "China Rose", image: "/china rose.jpeg" },
  { name: "Marigold", image: "/marigold.jpeg" },
  { name: "Sunflower", image: "/sunflower.jpg" },
];

const fruits = [
  { name: "Apple", image: "/apple.jpeg" },
  { name: "Orange", image: "/orange.jpg" },
  { name: "Banana", image: "/banana.jpg" },
];

const Plans: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    address: "",
    treeType: "",
    plantSelections: {},
    farmer: "",
  });
  const [confirmation, setConfirmation] = useState<FormData | null>(null);
  const [showFarmerDetails, setShowFarmerDetails] = useState(false);
  const [hideSelection, setHideSelection] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [totalBookings, setTotalBookings] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setConfirmation(formData);
  };

  const handleFinalSubmit = (): void => {
    alert("Your plantation booking has been confirmed.");
    setTotalBookings(totalBookings + 1);
    setIsHomePage(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlantSelection = (plant: string, quantity: number): void => {
    setFormData({
      ...formData,
      plantSelections: { ...formData.plantSelections, [plant]: quantity },
    });
  };

  const renderTreeTypes = (): JSX.Element | null => {
    const plants = formData.treeType === "flowers" ? flowers : fruits;
    return (
      <div className={styles.plantContainer}>
        {plants.map((plant, index) => (
          <div key={index} className={styles.plantCard}>
            <Image
              src={plant.image}
              alt={plant.name}
              width={150}
              height={150}
            />
            <h3>{plant.name}</h3>
            <input
              type="number"
              min="0"
              value={formData.plantSelections[plant.name] || 0}
              onChange={(e) =>
                handlePlantSelection(plant.name, parseInt(e.target.value, 10))
              }
            />
          </div>
        ))}
      </div>
    );
  };

  const renderFarmers = () => {
    return farmers.map((farmer, index) => (
      <div key={index} className={styles.farmerCard}>
        <Image src={farmer.image} alt={farmer.name} width={150} height={150} />
        <h3>{farmer.name}</h3>
        <p>{farmer.description}</p>
      </div>
    ));
  };

  if (isHomePage) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Plantation Booking Service</h1>
        </header>
        <main className={styles.main}>
          <h2>Booking Confirmation:</h2>
          <p>Name: {confirmation?.name}</p>
          <p>Email: {confirmation?.email}</p>
          <p>Address: {confirmation?.address}</p>
          <p>Tree Type: {confirmation?.treeType}</p>
          <p>Farmer: {confirmation?.farmer}</p>
          <p>Plants:</p>
          <ul>
            {confirmation &&
              Object.entries(confirmation.plantSelections).map(
                ([plant, quantity]) => (
                  <li key={plant}>
                    {plant}: {quantity}
                  </li>
                )
              )}
          </ul>
          <div className={styles.card}>
            <h3>Total Bookings: {totalBookings}</h3>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 Plantation Booking Service. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Plantation Booking Service</h1>
      </header>
      <main className={styles.main}>
        {!hideSelection && (
          <>
            <h1>Choose Your Tree Type:</h1>
            <select name="treeType" onChange={handleChange} required>
              <option value="">Select Tree Type</option>
              <option value="flowers">Flowers</option>
              <option value="fruits">Fruits</option>
            </select>
            {formData.treeType && renderTreeTypes()}
          </>
        )}
        <button onClick={() => setHideSelection(!hideSelection)}>
          {hideSelection ? "Show Selection" : "Hide Selection"}
        </button>
        <h2>Would you like to see farmer details?</h2>
        <button onClick={() => setShowFarmerDetails(!showFarmerDetails)}>
          {showFarmerDetails ? "Hide Farmer Details" : "Show Farmer Details"}
        </button>
        {showFarmerDetails && (
          <>
            <h2>Select a Farmer</h2>
            <select name="farmer" onChange={handleChange} required>
              <option value="">Select Farmer</option>
              {farmers.map((farmer, index) => (
                <option key={index} value={farmer.name}>
                  {farmer.name}
                </option>
              ))}
            </select>
            <h2>Farmers:</h2>
            <div className={styles.farmerContainer}>{renderFarmers()}</div>
          </>
        )}
        <h2>Book Plantation</h2>
        {confirmation ? (
          <div className={styles.confirmation}>
            <h3>Booking Confirmation:</h3>
            <p>Name: {confirmation.name}</p>
            <p>Email: {confirmation.email}</p>
            <p>Date: {confirmation.date}</p>
            <p>Address: {confirmation.address}</p>
            <p>Tree Type: {confirmation.treeType}</p>
            <p>Farmer: {confirmation.farmer}</p>
            <p>Plants:</p>
            <ul>
              {Object.entries(confirmation.plantSelections).map(
                ([plant, quantity]) => (
                  <li key={plant}>
                    {plant}: {quantity}
                  </li>
                )
              )}
            </ul>
            <button className={styles.submitButton} onClick={handleFinalSubmit}>
              Confirm Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Preferred Date:
              <input type="date" name="date" onChange={handleChange} required />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                onChange={handleChange}
                required
              />
            </label>
            <button className={styles.submitButton} type="submit">
              Book Now
            </button>
          </form>
        )}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Plantation Booking Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Plans;
