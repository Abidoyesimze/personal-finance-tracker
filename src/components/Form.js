import React, { useState } from 'react';

const Form = ({ addTransaction }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    
    // Create a new transaction object
    const newTransaction = {
      category: category,
      amount: parseFloat(amount),
    };

    // Call the addTransaction function passed as a prop
    addTransaction(newTransaction);

    // Clear form inputs
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default Form;
