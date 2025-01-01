import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <h1 className="home-header">Welcome to Masroofy </h1>
      <p className="home-subheader">
        Your journey to manage finances starts here. Track your income, expenses, and everything in between!
      </p>

      {/* Cards Section */}
      <div className="home-cards-container">
        {/* Card 1 */}
        <div className="home-card">
          <h3>Track Income</h3>
          <p>Keep an eye on all your income sources and stay on top of your finances.</p>
        </div>

        {/* Card 2 */}
        <div className="home-card">
          <h3>Track Expenses</h3>
          <p>Monitor your expenses and identify areas where you can save money.</p>
        </div>

        {/* Card 3 */}
        <div className="home-card">
          <h3>Manage Budget</h3>
          <p>Create budgets to help you control your spending and reach your financial goals.</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <a href="./add-transaction" className="home-button">
        Get Started
      </a>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Masroofy  | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Home;
