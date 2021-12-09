import React, { useEffect } from 'react';

const WeekStats = ({user}) => {
  return (
    <section class="week-list-data">
        <h2 class="Week of Stats">Your Week</h2>
        <p class="week-minutes-active hidden"></p>
        <p class="week-steps hidden"></p>
        <p class="week-water hidden"></p>
        <p class="week-sleep-hours hidden"></p>
        <p class="week-sleep-quality hidden"></p>
  </section>
  )
}

export default WeekStats;