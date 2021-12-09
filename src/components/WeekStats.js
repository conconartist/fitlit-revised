import React, { useEffect } from 'react';

const WeekStats = ({user}) => {
  return (
    <section className="week-list-data">
        <h2 className="Week of Stats">Your Week</h2>
        <p className="week-minutes-active hidden"></p>
        <p className="week-steps hidden"></p>
        <p className="week-water hidden"></p>
        <p className="week-sleep-hours hidden"></p>
        <p className="week-sleep-quality hidden"></p>
  </section>
  )
}

export default WeekStats;