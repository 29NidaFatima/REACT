import React, { useState } from 'react';
import './Sugar.css'; // Import the CSS file for styling

export default function Sugar() {
  const [sugar, setSugar] = useState(34);
  const [protein, setProtein] = useState(64);

  return (
    <div className="app">
      <header className="header">
        <span className="user">Welcome User!</span>
        <span className="notification">🔔</span>
      </header>

      <main>
        <h1 className="title">Today's Consumption</h1>

        <section className="progress-section">
          <div className="item">
            <span className="label">SUGAR</span>
            <div className="progress">
              <div className="bar" style={{ width: `${sugar}%` }} />
              <span className="value">{sugar}g/100g</span>
            </div>
          </div>

          <div className="item">
            <span className="label">PROTEIN</span>
            <div className="progress">
              <div className="bar" style={{ width: `${protein}%` }} />
              <span className="value">{protein}g/100g</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer-item">Home</span>
        <span className="scanner-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H5V3H8V5H16V3H19V5H21V8H19V16H21V19H19V21H16V19H8V21H5V19H3V16H5V8H3V5ZM8 8V16H16V8H8Z" fill="#3498db"/>
          </svg>
        </span>
        <span className="footer-item">Settings</span>
      </footer>
    </div>
  );
}
