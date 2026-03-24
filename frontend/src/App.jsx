/*import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from './pages/AdminDashboard';
import AddOpportunity from './pages/AddOpportunity';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-opportunity" element={<AddOpportunity />} />
      </Routes>
    </Router>
  );
}

export default App;*/


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from './pages/AdminDashboard';
import AddOpportunity from './pages/AddOpportunity';
import OpportunityDetail from './pages/OpportunityDetail'; // ✅ new

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-opportunity" element={<AddOpportunity />} />
        <Route path="/opportunity/:id" element={<OpportunityDetail />} /> {/* ✅ detail page */}
      </Routes>
    </Router>
  );
}

export default App;

