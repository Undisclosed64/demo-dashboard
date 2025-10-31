import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="layout">
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <h2 className="logo">{collapsed ? "DD" : "DemoDash"}</h2>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/settings">Settings</Link>
          </nav>

          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {" "}
            {collapsed ? ">>" : " << Collapse"}
          </button>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
