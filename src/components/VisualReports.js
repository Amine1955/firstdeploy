import React from 'react';
import './css/VisualReports.css';

const DonutChart = ({ value, total, color, size = 200 }) => {
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(value / total) * circumference} ${circumference}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="chart-svg">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#f3f4f6"
        strokeWidth={strokeWidth}
        className="chart-background"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="chart-progress"
      />
    </svg>
  );
};

const VisualReports = ({ incomeData, expenseData, transactions }) => {
  const total = incomeData + expenseData;

  return (
    <div className="visual-reports">
     
      {/* Income Card */}
      <div className="chart">
        <h3>Income</h3>
        <p className="chart-value">{incomeData} DZD</p>
        <div className="chart-svg-container">
          <DonutChart value={incomeData} total={total} color="#047857" />
        </div>
        <div className="chart-legend">
          <div className="legend-color" style={{ backgroundColor: '#047857' }}></div>
          <span className="legend-text">Total Income</span>
        </div>
      </div>

      {/* Expense Card */}
      <div className="chart">
        <h3>Expense</h3>
        <p className="chart-value">{expenseData} DZD</p>
        <div className="chart-svg-container">
          <DonutChart value={expenseData} total={total} color="#ef4444" />
        </div>
        <div className="chart-legend">
          <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
          <span className="legend-text">Total Expenses</span>
        </div>
      </div>

      {/* Center Summary Card */}
      <div className="chart">
        <h3>Expense Tracker</h3>
        <p className="chart-value">
          Total Balance {(incomeData - expenseData).toLocaleString()} DZD
        </p>

        <div className="summary-cards">
          <div className="summary-card income-summary">
            <h4 className="summary-title">Income Summary</h4>
            <p className="summary-value">{incomeData.toLocaleString()} DZD</p>
          </div>
          <div className="summary-card expense-summary">
            <h4 className="summary-title">Expense Summary</h4>
            <p className="summary-value">{expenseData.toLocaleString()} DZD</p>
          </div>
          <div className="summary-card net-balance-summary">
            <h4 className="summary-title">Net Balance</h4>
            <p className="summary-value">
              {(incomeData - expenseData).toLocaleString()} DZD
            </p>
          </div>
        </div>
      </div>
       {/* Footer */}
       <div className="footer">
        <p>&copy; 2025 Masroofy | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default VisualReports;
