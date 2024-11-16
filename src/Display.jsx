import React, { useContext } from "react";
import { TasksContext } from "./TasksContext";
import Accordion from "./Accordion";

const Display = () => {
  const { submissions } = useContext(TasksContext);

  return (
    <div className="flex flex-col items-center bg-blue-200 text-black p-5 rounded-xl w-screen max-w-lg h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-blue-950">Submitted Tasks</h2>
      {submissions.length === 0 ? (
        <p className="text-blue-950">No submissions yet.</p>
      ) : (
        submissions.map((submission, index) => (
          <div className="overflow-auto" key={index}>
            <Accordion
              title={new Date(submission.timestamp).toLocaleString()}
              content={submission.tasks}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Display;
