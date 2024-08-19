import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import AddEditEventPage from './pages/AddEditEventPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event/:id" element={<EventPage />} />
      <Route path="/add" element={<AddEditEventPage />} />
      <Route path="/edit/:id" element={<AddEditEventPage />} />
    </Routes>
  );
}

export default App;
