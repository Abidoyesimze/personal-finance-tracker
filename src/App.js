import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart'; // Assuming you have a custom Chart component
import { saveToLocalStorage, getFromLocalStorage } from './components/localStorage';
import './styles.css';

const App = () => {
  const [transactions, setTransactions] = useState(getFromLocalStorage('transactions') || []);

  useEffect(() => {
    saveToLocalStorage('transactions', transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <Navbar />
      <Form addTransaction={addTransaction} /> {/* Pass the addTransaction function as a prop */}
      <Dashboard transactions={transactions} /> {/* Pass the transactions state as a prop */}
      <Chart transactions={transactions} /> {/* Pass the transactions state as a prop */}
    </div>
  );
};

export default App;
