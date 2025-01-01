import React, { useState } from 'react';
import './css/AddTransaction.css';

const AddTransaction = ({ onAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
    date: new Date().toISOString().split('T')[0], // default to today
    category: '',
    type: 'income',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.name || !transaction.amount || !transaction.date || !transaction.category) {
      alert("Please fill in all required fields.");
      return;
    }

    // Add transaction and reset form
    onAddTransaction(transaction);
    setTransaction({
      name: '',
      amount: '',
      date: new Date().toISOString().split('T')[0], // reset to today's date
      category: '',
      type: 'income',
      notes: '',
    });

    // Show success alert
    alert("Transaction added successfully!");
  };

  return (
    <div className="add-transaction-container">
      <h1 className="add-transaction-header">Add Transaction</h1>
      <form className="add-transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Transaction Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Transaction Name"
          value={transaction.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Amount"
          value={transaction.amount}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={transaction.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          placeholder="Notes"
          value={transaction.notes}
          onChange={handleChange}
        ></textarea>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={transaction.type === 'income'}
              onChange={handleChange}
            /> Income
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={transaction.type === 'expense'}
              onChange={handleChange}
            /> Expense
          </label>
        </div>

        <button type="submit">Add Transaction</button>
      </form>
      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Masroofy  | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default AddTransaction;
