export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="card stat-card">
          <h2>6</h2>
          <p>Total Tasks</p>
        </div>
        <div className="card stat-card">
          <h2>2</h2>
          <p>Completed</p>
        </div>
        <div className="card stat-card">
          <h2>4</h2>
          <p>Pending</p>
        </div>
        <div className="card stat-card">
          <h2>3</h2>
          <p>Team Members</p>
        </div>
      </div>

      <div className="welcome-card card">
        <h3>Welcome back 👋</h3>
        <p>Check the Tasks section to see what's pending today.</p>
      </div>
    </div>
  );
}
