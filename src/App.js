import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.js";
import Auth from "./Pages/Auth/Auth.jsx";
import Property from "./Pages/Property/Property.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/auth" element={<Auth />} />{" "}
      {/* go to http://localhost:3000/auth to see the Auth component */}
      <Route path="/properties" element={<h1>Properties</h1>} />
      <Route path="/properties/:id" element={<Property />} />
    </Routes>
  );
}

export default App;
