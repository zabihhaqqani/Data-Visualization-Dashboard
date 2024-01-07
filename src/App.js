import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./auth/RequiresAuth";
import ChartShare from "./pages/chartShare/ChartShare";
import Dashboard from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import Trends from "./pages/trends/Trends";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Dashboard />
            </RequiresAuth>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <RequiresAuth>
              <Trends />
            </RequiresAuth>
          }
        />
        <Route
          path="/dashboard/undefined"
          element={
            <RequiresAuth>
              <Dashboard />
            </RequiresAuth>
          }
        />
        <Route
          path="/chartshare/:age/:gender/:startDate/:endDate"
          element={
            <RequiresAuth>
              <ChartShare />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      
      </Routes>
    </div>
  );
}

export default App;
