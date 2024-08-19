import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateChange }) => {
  return (
    <div>
      <Calendar onChange={onDateChange} />
    </div>
  );
};

export default CalendarView;
