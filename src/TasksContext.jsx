import React, { createContext, useState } from "react";

export const TasksContext = createContext();

export const UserProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);

  const addTasks = (tasks) => {
    const currentTimestamp = Date.now();
    const newSubmission = {
      tasks,
      timestamp: currentTimestamp,
    };
    setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);
    console.log("Submissions:", [...submissions, newSubmission]);
  };

  return (
    <TasksContext.Provider value={{ submissions, addTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
