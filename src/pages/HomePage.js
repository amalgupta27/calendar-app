import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarView from '../components/CalendarView';
import EventFilter from '../components/EventFilter';
import { EventContext } from '../EventContext';

const HomePage = () => {
  const { events } = useContext(EventContext);
  const [filteredCategory, setFilteredCategory] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    // Add logic to handle date selection
  };

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredEvents = events.filter(event =>
    !filteredCategory || event.category === filteredCategory
  );

  return (
    <div>
      <h1>Calendar Application</h1>
      <EventFilter onFilterChange={handleFilterChange} />
      <CalendarView onDateChange={handleDateChange} />
      <div>
        {filteredEvents.map(event => (
          <div key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.category}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/add')}>Add Event</button>
    </div>
  );
};

export default HomePage;
