import { useState } from "react";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Netflix", price: 499 },
    { id: 2, name: "Spotify", price: 119 },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newSub = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
    };

    setSubscriptions((prev) => [...prev, newSub]);
    setName("");
    setPrice("");
  };

  const handleDelete = (id) => {
    setSubscriptions((prev) => prev.filter((item) => item.id !== id));
  };

  const total = subscriptions.reduce(
    (sum, sub) => sum + Number(sub.price || 0),
    0
  );

  return (
    <div className="subscriptions">
      <div className="subscriptions-header">
        <h2>Subscriptions</h2>
        <p>Keep track of all your recurring payments in one place.</p>
      </div>

      <div className="subscriptions-layout">
        <form className="card subscription-form" onSubmit={handleAdd}>
          <h3 className="card-title">Add New Subscription</h3>
          <label className="form-label">
            Name
            <input
              type="text"
              className="input"
              placeholder="e.g. Netflix"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="form-label">
            Monthly Price (₹)
            <input
              type="number"
              className="input"
              placeholder="e.g. 499"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
            />
          </label>

          <button type="submit" className="btn primary-btn">
            Add Subscription
          </button>
        </form>

        <div className="card subscription-list-card">
          <div className="subscription-list-header">
            <h3 className="card-title">Current Subscriptions</h3>
            <span className="badge">
              Total: ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          {subscriptions.length === 0 ? (
            <p className="card-text empty-text">
              No subscriptions yet. Add your first one using the form.
            </p>
          ) : (
            <div className="subscription-table">
              <div className="subscription-table-head">
                <span>Name</span>
                <span>Monthly Price</span>
                <span>Action</span>
              </div>
              {subscriptions.map((sub) => (
                <div className="subscription-table-row" key={sub.id}>
                  <span>{sub.name}</span>
                  <span>₹{sub.price}</span>
                  <button
                    type="button"
                    className="btn danger-btn"
                    onClick={() => handleDelete(sub.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;