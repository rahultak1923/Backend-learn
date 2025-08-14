import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard.js';
import Navbar from './components/Navbar';
import PrivateRoute from './utils/PrivateRoute';
import NoteProvider from './context/NoteContext';

const App = () => {
  return (
    <NoteProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<div>Welcome to the JWT Auth App!</div>} />
      </Routes>
    </Router>
    </NoteProvider>
  );
};

export default App;
