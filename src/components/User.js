import React, { useEffect } from 'react';

const User = ({user}) => {
  return (
    <section class="user-main">
    <div class="wrapper-top">
      <article class="user-profile">
        <h2>Your Profile</h2>
          <p class="user-name"></p>
          <p class="user-address"></p>
          <p class="user-email"></p>
          <p class="user-stride-length"></p>
          <p class="user-friends-length"></p>
      </article>
      <div class="user-container">
        <article class="user-latest-sleep-stats">
          <h3>Last Night's Sleep Stats</h3>
          <p class="sleep-quantity-last-night"></p>
          <p class="sleep-quality-last-night"></p>
        </article>
        <article class="user-step-goal">
          <h3>Your Daily Step Goal</h3>
            <p class="user-step-goal-input"></p>
        </article>
        <article class="community-step-goal">
          <h3>Community Average Step Goal</h3>
          <p class="community-step-goal-input"></p>
        </article>
      </div>
    </div>

  </section>
  )
}

export default User;