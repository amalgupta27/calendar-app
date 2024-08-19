import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../EventContext';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);
  const event = events.find(event => event.id === id);

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleDelete = () => {
    deleteEvent(id);
    navigate('/');
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.category}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
    </div>
  );
};

export default EventDetails;
