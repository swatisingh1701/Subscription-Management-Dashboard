import { useState } from "react";

function Dashboard() {
  const [subscriptions] = useState([
    { id: 1, name: "Netflix", price: 499 },
    { id: 2, name: "Spotify", price: 119 },
    { id: 3, name: "ChatGPT Plus", price: 1600 },
  ]);

  const totalSubscriptions = subscriptions.length;
  const totalMonthlyCost = subscriptions.reduce(
    (sum, sub) => sum + Number(sub.price || 0),
    0
  );

  return (
    <div className="dashboard">
      <div className="cards-grid">
        <div className="card">
          <h2 className="card-title">Total Subscriptions</h2>
          <p className="card-value">{totalSubscriptions}</p>
          <p className="card-helper">Active recurring services</p>
        </div>
        <div className="card">
          <h2 className="card-title">Monthly Cost</h2>
          <p className="card-value">
            ₹{totalMonthlyCost.toLocaleString("en-IN")}
          </p>
          <p className="card-helper">Estimated per month</p>
        </div>
        <div className="card">
          <h2 className="card-title">Average Per Service</h2>
          <p className="card-value">
            ₹
            {totalSubscriptions
              ? Math.round(totalMonthlyCost / totalSubscriptions)
              : 0}
          </p>
          <p className="card-helper">Rough average spend</p>
        </div>
      </div>

      <div className="card dashboard-secondary">
        <h2 className="card-title">Quick Overview</h2>
        <p className="card-text">
          This dashboard shows a sample of your subscriptions. You can manage
          the actual list in the Subscriptions tab and see simple insights in
          Analytics.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;