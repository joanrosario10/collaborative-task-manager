import React from "react";
import "./TaskItem.scss";

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <p>{task.text}</p>
      {/* Add any additional components or functionality related to a task here */}
    </div>
  );
}

export default TaskItem;
