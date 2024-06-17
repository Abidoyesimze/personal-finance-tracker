import React, { useState } from 'react';


const Form = ({ addTransaction }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ amount: parseFloat(amount), category});
        setAmount();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                </select>
                <button type='submit'>Add</button>
        </form>
    );
};
export default Form;