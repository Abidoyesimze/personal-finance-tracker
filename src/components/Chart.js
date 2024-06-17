import React from 'react';
import { Bar } from "react-chartjs-2";

const Chart = ({ transactions }) => {
    const income = transactions.filter(t => t.category === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.category === 'expense').reduce((acc, t) => acc + t.amount, 0);

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Amount',
                data: [income, expense],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };
  return <Bar data={data} />;
};

export default Chart;