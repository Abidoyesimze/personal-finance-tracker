import React from 'react';

const Dashboard = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions found</div>;
  }

  const income = transactions.filter(t => t.category === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.category === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const netSavings = income - expenses;

  return (
    <div id='summary-section'>
      <h2>Summary</h2>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expenses: ${expenses.toFixed(2)}</p>
      <p>Net Savings: ${netSavings.toFixed(2)}</p>
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
