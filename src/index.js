import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { EventProvider } from './EventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EventProvider>
    <Router>
      <App />
    </Router>
  </EventProvider>
);
