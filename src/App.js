import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import VisualReports from './components/VisualReports';
import Modal from './components/Modal';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + parseFloat(t.amount), 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + parseFloat(t.amount), 0);
  const balance = totalIncome - totalExpenses;

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleEdit = (transaction) => {
    setTransactionToEdit(transaction);
    setShowModal(true); // Show the modal for editing
  };

  const handleUpdate = (updatedTransaction) => {
    setTransactions(
      transactions.map(t => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
    setTransactionToEdit(null); 
    setShowModal(false); // Close the modal after update
    alert("Transaction updated successfully!");
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />} />
        <Route 
          path="/add-transaction" 
          element={<AddTransaction onAddTransaction={addTransaction} />} 
        />
        <Route 
          path="/transactions" 
          element={<TransactionList 
            transactions={transactions} 
            onDelete={deleteTransaction} 
            onEdit={handleEdit} 
          />} 
        />
        <Route path="/reports" element={<VisualReports incomeData={totalIncome} expenseData={totalExpenses} />} />
      </Routes>

      {/* Modal for Editing Transaction */}
      {showModal && (
        <Modal 
          transaction={transactionToEdit} 
          onUpdateTransaction={handleUpdate} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </Router>
  );
};

export default App;
