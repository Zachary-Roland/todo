import React from "react";
import TaskDisplay from "./TaskDisplay";
function TaskFilter({ defaultTasks }) {
  let filter = "";
  return (
    <div>
      {/* Add input to filter */}
      <div>
        <input
          placeholder="To Filter"
          onChange={(e) => (filter = e.target.value)}
        ></input>
      </div>
      {defaultTasks.map((task, idx) => (
        <TaskDisplay key={idx} task={task} />
      ))}
    </div>
  );
}
export default TaskFilter;
