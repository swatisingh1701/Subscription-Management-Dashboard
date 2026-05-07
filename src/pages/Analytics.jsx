import { useMemo } from "react";

function Analytics() {
  const subscriptions = [
    { id: 1, name: "Netflix", price: 499 },
    { id: 2, name: "Spotify", price: 119 },
    { id: 3, name: "Figma", price: 900 },
    { id: 4, name: "YouTube Premium", price: 139 },
  ];

  const { mostExpensive, averageCost } = useMemo(() => {
    if (subscriptions.length === 0) {
      return { mostExpensive: null, averageCost: 0 };
    }

    const mostExpensiveLocal = subscriptions.reduce((max, sub) =>
      sub.price > max.price ? sub : max
    );

    const total = subscriptions.reduce(
      (sum, sub) => sum + Number(sub.price || 0),
      0
    );
    const avg = Math.round(total / subscriptions.length);

    return { mostExpensive: mostExpensiveLocal, averageCost: avg };
  }, [subscriptions]);

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h2>Analytics</h2>
        <p>Simple insights based on a sample list of subscriptions.</p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3 className="card-title">Most Expensive Subscription</h3>
          {mostExpensive ? (
            <>
              <p className="card-value">{mostExpensive.name}</p>
              <p className="card-helper">
                Monthly cost: ₹{mostExpensive.price}
              </p>
            </>
          ) : (
            <p className="card-text">No data available.</p>
          )}
        </div>

        <div className="card">
          <h3 className="card-title">Average Monthly Cost</h3>
          <p className="card-value">₹{averageCost}</p>
          <p className="card-helper">
            Across all subscriptions in this sample.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Simple Tip</h3>
          <p className="card-text">
            Look at subscriptions you rarely use but pay a lot for. Those are
            usually the best candidates to cancel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;