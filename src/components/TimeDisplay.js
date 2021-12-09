import React from 'react';

const TimeDisplay = ({user}) => {
  return (
      
    <section class="date-select">
      <label for="today">Show stats for the day of:</label>
      <input type="date" id="today" name="today"
        value="2019-09-22"
        min="2019-06-15" max="2019-09-16"/>
      <h2 class="date-title">Show stats for the week of:</h2>
      <div class="wrapper-date-select">
        <label for="start">Start date:</label>
        <input type="date" id="start" name="week-start"
          value="2019-09-16"
          min="2019-06-15" max="2019-09-16"/>
        <label for="end">End date:</label>
        <input type="date" id="end" name="week-end"
          value="2019-09-22"
          min="2019-06-21" max="2019-09-22"/>
      </div>
    </section>
  )
}

export default TimeDisplay;