import React, { useEffect } from 'react';

const User = ({userName}) => {
  return (
    <section className="user-main">
    <div className="wrapper-top">
      <article className="user-profile">
        <h2>Your Profile</h2>
          <p className="user-name">{userName}</p>
          <p className="user-address">{userName}</p>
          <p className="user-email"></p>
          <p className="user-stride-length"></p>
          <p className="user-friends-length"></p>
      </article>
      <div className="user-container">
        <article className="user-latest-sleep-stats">
          <h3>Last Night's Sleep Stats</h3>
          <p className="sleep-quantity-last-night"></p>
          <p className="sleep-quality-last-night"></p>
        </article>
        <article className="user-step-goal">
          <h3>Your Daily Step Goal</h3>
            <p className="user-step-goal-input"></p>
        </article>
        <article className="community-step-goal">
          <h3>Community Average Step Goal</h3>
          <p className="community-step-goal-input"></p>
        </article>
      </div>
    </div>

  </section>
  )
}

export default User;