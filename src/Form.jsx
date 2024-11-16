import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { CirclePlus, SendHorizontal } from "lucide-react";
import { TasksContext } from "./TasksContext";
import toast from "react-hot-toast";

const Form = () => {
  const x = 123;
  const [tasks, setTasks] = useState([
    { id: Date.now(), value: "", title: "Task" },
  ]);
  const [taskLabel, setTaskLabel] = useState("");
  const { addTasks } = useContext(TasksContext);

  const handleAddTaskLabel = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: "", title: taskLabel ? taskLabel : "Task" },
    ]);
    setTaskLabel("");
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleInputChange = (id, newValue) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, value: newValue } : task
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = tasks.every(
      (task) => task.value && task.value.trim().length > 0
    );

    if (!isValid) {
      toast.error("Tasks cannot be empty!");
      return;
    }

    addTasks(tasks);
    toast.success("Tasks submitted successfully!");

    setTasks([{ id: Date.now(), value: "", title: "Task" }]);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-200 text-black p-5 rounded-xl w-screen max-w-lg h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-between items-center w-full mt-auto"
      >
        <div className="flex flex-row justify-center self-center w-2/3 rounded-lg overflow-hidden">
          <input
            type="text"
            value={taskLabel}
            onChange={(e) => setTaskLabel(e.target.value)}
            className="px-4 py-2 w-full  text-blue-950"
            placeholder="Add Task Label"
          />
          <button
            type="button"
            onClick={() => handleAddTaskLabel()}
            className=" bg-blue-500 border-blue-500 px-5 text-white hover:bg-blue-500 hover:text-white transition-all"
          >
            <CirclePlus size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="flex flex-row gap-2 items-center px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white transition-all"
        >
          Submit
          <SendHorizontal size={20} />
        </button>
      </form>
      <div className="flex flex-1 flex-col m-5 w-full overflow-y-auto">
        {tasks.map((task) => (
          <div key={task.id} className="mb-2">
            <InputField
              value={task.value}
              label={task.title}
              onDeleteClick={() => handleDeleteTask(task.id)}
              onChange={(e) => handleInputChange(task.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
