import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.js";
import Auth from "./Pages/Auth/Auth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} /> {/* go to http://localhost:3000/auth to see the Auth component */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
