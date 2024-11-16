import React from "react";
import { Delete } from "lucide-react";

const InputField = ({ onDeleteClick, label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="task" className="font-medium">
        {label}
      </label>
      <div className="flex flex-row border rounded-lg overflow-hidden items-center ">
        <input
          type="text"
          id="task"
          value={value || ""}
          onChange={onChange}
          className="px-4 py-2 w-full text-blue-950"
          placeholder="Enter Task"
        />
        <button
          className="bg-red-500 px-4 py-2 hover:bg-red-600 active:bg-red-500 transition-all"
          onClick={onDeleteClick}
        >
          <Delete color="white" />
        </button>
      </div>
    </div>
  );
};

export default InputField;
