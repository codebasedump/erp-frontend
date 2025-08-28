import React from 'react';

function StatCard({ title, value, change, color }) {
  return (
    <div className={`card text-white bg-${color} mb-3`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value} <span className="float-end">{change}</span></p>
      </div>
    </div>
  );
}

export default StatCard;