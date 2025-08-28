import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    { label: 'New Users', data: [12, 19, 3, 5, 2, 3, 9], borderColor: 'blue', fill: false },
    { label: 'Returning Users', data: [5, 15, 8, 12, 7, 10, 6], borderColor: 'green', fill: false },
    { label: 'Page Views', data: [20, 30, 25, 40, 35, 50, 45], borderColor: 'orange', fill: false },
  ],
};

function ChartPanel() {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Traffic Overview</h5>
        <Line data={data} />
      </div>
    </div>
  );
}

export default ChartPanel;