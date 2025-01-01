import React from 'react';
import './css/TransactionList.css';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  // Separate transactions into income and expense based on type
  const incomeTransactions = transactions.filter(t => t.type === 'income');
  const expenseTransactions = transactions.filter(t => t.type === 'expense');

  return (
    <div className="transaction-list-container">
      {/* Header */}
      <h1 className="transaction-header">Transaction List</h1>

      {/* Income Section */}
      {incomeTransactions.length > 0 && (
        <div className="transaction-section income-section">
          <h2 className="section-title">Income</h2>
          <div className="transaction-list">
            {incomeTransactions.map((transaction, index) => (
              <div key={index} className="transaction-item income">
                <div className="details">
                  <h3>{transaction.name}</h3>
                  <p>{transaction.date}</p>
                  <p>Category: {transaction.category}</p>
                </div>
                <div className="details">
                  <p className="font-bold">{transaction.amount} DZD</p>
                </div>
                <div className="actions">
                  <button onClick={() => onEdit(transaction)}>Edit</button>
                  <button onClick={() => onDelete(transaction.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expense Section */}
      {expenseTransactions.length > 0 && (
        <div className="transaction-section expense-section">
          <h2 className="section-title">Expenses</h2>
          <div className="transaction-list">
            {expenseTransactions.map((transaction, index) => (
              <div key={index} className="transaction-item expense">
                <div className="details">
                  <h3>{transaction.name}</h3>
                  <p>{transaction.date}</p>
                  <p>Category: {transaction.category}</p>
                </div>
                <div className="details">
                  <p className="font-bold">{transaction.amount} DZD</p>
                </div>
                <div className="actions">
                  <button onClick={() => onEdit(transaction)}>Edit</button>
                  <button onClick={() => onDelete(transaction.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Masroofy | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default TransactionList;
