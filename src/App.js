import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TransactionList from './components/TransactionList';
import Chart from './components/Chart';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';
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
      <Form addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Chart transactions={transactions} />
    </div>
  );
};

export default App;
