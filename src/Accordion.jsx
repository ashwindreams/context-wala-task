import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg overflow-hidden w-full mb-2">
      <button
        onClick={toggleAccordion}
        className={`flex flex-row gap-32 items-center justify-between w-full text-left p-4  bg-white ${
          isOpen ? "border-b" : ""
        }`}
      >
        <div>
          <span className="font-semibold">Submitted At: </span> {title}
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className="p-4 bg-white border-t ">
          <ul className="list-disc">
            {content.map((task, index) => (
              <li key={index} className="flex flex-row items-start gap-1">
                <p className="font-semibold w-fit">{task.title}</p>
                <p>{task.value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
