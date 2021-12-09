import React, { useEffect } from 'react';

const Friends = ({user}) => {
  return (
    <section class="friends">
        <h2>Friend Step Challenge</h2>
        <p class="friends-names"></p>
        <p class="friends-winner"></p>
        <canvas id="friendChart" width="800" height="400"></canvas>
    </section>
  )
}

export default Friends;