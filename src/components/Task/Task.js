import React from "react";
import TaskFilter from "./TaskFilter";
function Task() {
  // Create an array of strings (mn 5)
  const defaultTasks = [
    "Fight Jeff Bezos",
    "Mysteriously become a billionaire",
    "Pay off everyone's debt",
    "Provide free housing to the unhoused",
    "Stop by Target for OatMilk",
  ];
  let newTask = "";
  return (
    <div>
      {/* Create an input w/ a button */}
      <div>
        <input
          onChange={(e) => (newTask = e.target.value)}
          placeholder="Type Something!"
        ></input>
        {/* // when you click button, log what in the input */}
        <button onClick={() => console.log(newTask)}>Add ToDo!</button>
      </div>
      <TaskFilter defaultTasks={defaultTasks} />
    </div>
  );
}
export default Task;
