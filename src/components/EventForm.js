import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventContext } from '../EventContext';

const EventForm = () => {
  const { events, addEvent, updateEvent } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const existingEvent = events.find(event => event.id === id);
  const [eventDetails, setEventDetails] = useState(existingEvent || { title: '', date: '', category: '' });

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateEvent(id, eventDetails);
    } else {
      addEvent({ ...eventDetails, id: Date.now().toString() });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={eventDetails.title}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={eventDetails.date}
        onChange={handleChange}
      />
      <select
        name="category"
        value={eventDetails.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;
