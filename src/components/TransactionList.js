import React from 'react'

const TransactionList = ({ transactions }) => {
  return (
    <div>
        <h2>Transactions</h2>
        <ul>
            {transactions.map((transaction, index) => (
                <li key={index}>
                    {transaction.category}: ${transaction.amount}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default TransactionList