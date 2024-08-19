import React, { createContext, useState } from 'react';

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map(event => event.id === id ? updatedEvent : event));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
