import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
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
      <Form addTransaction={addTransaction} /> {/* Correctly pass the addTransaction function */}
      <Dashboard transactions={transactions} /> {/* Correctly pass the transactions state */}
      <Chart transactions={transactions} /> {/* Correctly pass the transactions state */}
    </div>
  );
};

export default App;
