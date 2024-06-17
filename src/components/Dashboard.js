import React from 'react';

const Dashboard = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions found</div>;
  }

  return (
    <div>
      <h2>Transactions</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {transactions.map((transaction, index) => (
          <li key={index} style={{ margin: '10px 0', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <div>
              <strong>{transaction.category}</strong>: ${transaction.amount.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;



