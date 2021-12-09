import React, { useEffect } from 'react';

const Graph = ({user}) => {
  return (
    <section class="graph">
    <h2 class="title-graph">Graph</h2>
    <canvas id="stepChart" class="" width="800" height="400"></canvas>
    <canvas id="waterChart" class="hidden" width="800" height="400"></canvas>
    <canvas id="stairsChart" class="hidden" width="800" height="400"></canvas>
    <canvas id="activeMinutesChart" class="hidden" width="800" height="400"></canvas>
    <canvas id="sleepChart" class="hidden" width="800" height="400"></canvas>
  </section>
  )
}

export default Graph;