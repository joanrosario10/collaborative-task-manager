import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./AddTask.scss";

function AddTask() {
  const [task, setTask] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        name: task,
        complete: false,
      });
      setTask(""); // Reset task input after adding
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        className="form-control add-task"
        placeholder="New Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
}

export default AddTask;
