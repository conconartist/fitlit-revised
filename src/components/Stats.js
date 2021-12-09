import React from 'react';

const Stats = ({user}) => {
    return (
        <section class="stats">
        <div id="steps" class="category">
          <h2 class="category-title">Steps</h2>
          <img class="steps-icon" src="../assets/shoe.svg" alt="shoe as steps icon" />
          <div class="steps-category-content hidden">
            <p class="user-step-miles"></p>
            <p class="user-steps-today"></p>
            <p class="user-met-step-goal-today"></p>
            <p class="user-days-exceeding-goal"></p>
            <p class="community-steps-today"></p>
          </div>
        </div>
  
        <article id="water" class="category">
          <h2 class="category-title">Water</h2>
          <img class="water-icon" src="../assets/drops.svg" alt="water drop as hydration icon" />
          <div class="water-category-content hidden">
            <p class="water-stats"></p>
          </div>
        </article>
  
        <article id="stairs" class="category">
          <h2 class="category-title">Stairs</h2>
          <img class="stairs-icon" src="../assets/success.svg" alt="staircase as stair icon"/>
          <div class="stairs-category-content hidden">
            <p class="community-average-stairs"></p>
            <p class="user-record-stairs"></p>
          </div>
        </article>
  
        <article id="active-minutes" class="category">
          <h2 class="category-title">Active Minutes</h2>
          <img class="active-icon" src="../assets/heart-shape-with-beats-line.svg" alt="shape of heart with line" />
          <div class="active-minutes-category-content hidden">
            <p class="user-minutes-active"></p>
            <p class="user-week-average-minutes-active"></p>
            <p class="community-average-minutes-active"></p>
          </div>
        </article>
  
        <article id="sleep-cat" class="category">
          <h2 class="category-title">Sleep</h2>
          <img class="sleep-icon" src="../assets/clock.svg" alt="pillow and clock as sleep icon"/>
          <div class="sleep-container sleep-category-content hidden">
            <article class="user-all-time-sleep-stats">
              <h3 class="sleep-title">Your All-Time Sleep Stats</h3>
            </article>
              <p class="sleep-average-hours-input"></p>
              <p class="sleep-average-quality-input"></p>
          </div>
        </article>
      </section>
    )
}

export default Stats;