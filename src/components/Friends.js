import React, { useEffect } from 'react';

const Friends = ({user}) => {
  return (
    <section className="friends">
        <h2>Friend Step Challenge</h2>
        <p className="friends-names"></p>
        <p className="friends-winner"></p>
        <canvas id="friendChart" width="800" height="400"></canvas>
    </section>
  )
}

export default Friends;