import { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, title: "Write blog draft", status: "pending", owner: "You" },
        { id: 2, title: "Add Cypress tests", status: "done", owner: "You" },
        {
          id: 3,
          title: "Review PR comments",
          status: "pending",
          owner: "Alex",
        },
        { id: 4, title: "Fix UI spacing issues", status: "done", owner: "Sam" },
        {
          id: 5,
          title: "Prepare demo screenshots",
          status: "pending",
          owner: "You",
        },
        {
          id: 6,
          title: "Publish blog article",
          status: "pending",
          owner: "You",
        },
      ]);
    }, 800);
  }, []);

  const filteredTasks = tasks?.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  if (!tasks)
    return (
      <>
        <h1>Tasks</h1>
        <div className="skeleton" style={{ width: "85%", height: "28px" }} />
        <div className="skeleton" style={{ width: "85%", height: "28px" }} />
        <div className="skeleton" style={{ width: "85%", height: "28px" }} />
      </>
    );

  return (
    <div className="task-page">
      <h1>Tasks</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="done">Completed</option>
      </select>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.owner}</td>
              <td>
                <span className={`badge ${task.status}`}>{task.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
