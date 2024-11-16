import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Global.css";
import App from "./App.jsx";
import { UserProvider } from "./TasksContext.jsx";
import { User } from "lucide-react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
