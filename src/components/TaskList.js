import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./TaskList.scss";
                                                                                                                                                                                                 
function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({ id: doc.id, ...doc.data() });
      });
      setTasks(tasksArray);
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
