import React, { useState, useEffect } from 'react';
import "./css/Model.css"

const Modal = ({ transaction, onUpdateTransaction, onClose }) => {
  const [updatedTransaction, setUpdatedTransaction] = useState(transaction);

  useEffect(() => {
    setUpdatedTransaction(transaction); // Update the state when transaction is passed as prop
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTransaction({ ...updatedTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedTransaction.name || !updatedTransaction.amount || !updatedTransaction.date || !updatedTransaction.category) {
      alert("Please fill in all required fields.");
      return;
    }
    onUpdateTransaction(updatedTransaction);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Edit Transaction</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Transaction Name"
            value={updatedTransaction.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={updatedTransaction.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={updatedTransaction.date}
            onChange={handleChange}
            required
          />
          <select name="category" value={updatedTransaction.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <textarea
            name="notes"
            placeholder="Notes"
            value={updatedTransaction.notes}
            onChange={handleChange}
          ></textarea>
          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="income"
                checked={updatedTransaction.type === 'income'}
                onChange={handleChange}
              /> Income
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={updatedTransaction.type === 'expense'}
                onChange={handleChange}
              /> Expense
            </label>
          </div>
          <button type="submit">Update Transaction</button>
        </form>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
