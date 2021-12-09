import React from 'react';

const TimeDisplay = ({user}) => {
  return (
      
    <form className="date-select">
      <label htmlFor="today">Show stats for the day of:</label>
      <input type="date" id="today" name="today"
        value="2019-09-22"
        min="2019-06-15" max="2019-09-16"/>
      <h2 className="date-title">Show stats for the week of:</h2>
      <div className="wrapper-date-select">
        <label htmlFor="start">Start date:</label>
        <input type="date" id="start" name="week-start"
          value="2019-09-16"
          min="2019-06-15" max="2019-09-16"/>
        <label htmlFor="end">End date:</label>
        <input type="date" id="end" name="week-end"
          value="2019-09-22"
          min="2019-06-21" max="2019-09-22"/>
      </div>
    </form>
  )
}

export default TimeDisplay;