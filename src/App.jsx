import { useState } from "react";
import Display from "./Display";
import Form from "./Form";
import "./Global.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-evenly h-screen bg-slate-900 text-white">
      <h2 className="text-3xl font-medium">Context Wala Project</h2>
      <div className="flex flex-row items-center justify-center gap-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500 font-bold" : "text-white "
            }   hover:bg-white/10 px-4 py-2 rounded-md text-xl`
          }
        >
          Add Tasks
        </NavLink>
        <NavLink
          to="/display"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500 font-bold" : "text-white "
            }  hover:bg-white/10 px-4 py-2 rounded-md text-xl`
          }
        >
          Tasks
        </NavLink>
      </div>
      <div className="flex flex-row  items-center gap-5">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/display" element={<Display />} />
        </Routes>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      </div>
    </div>
  );
}

export default App;
