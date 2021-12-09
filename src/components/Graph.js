import React, { useEffect } from 'react';

const Graph = ({user}) => {
  return (
    <section className="graph">
    <h2 className="title-graph">Graph</h2>
    <canvas id="stepChart" className="" width="800" height="400"></canvas>
    <canvas id="waterChart" className="hidden" width="800" height="400"></canvas>
    <canvas id="stairsChart" className="hidden" width="800" height="400"></canvas>
    <canvas id="activeMinutesChart" className="hidden" width="800" height="400"></canvas>
    <canvas id="sleepChart" className="hidden" width="800" height="400"></canvas>
  </section>
  )
}

export default Graph;