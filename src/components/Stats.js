import React from 'react';

const Stats = ({user}) => {
    return (
        <section className="stats">
        <div id="steps" className="category">
          <h2 className="category-title">Steps</h2>
          <img className="steps-icon" src="../assets/shoe.svg" alt="shoe as steps icon" />
          <div className="steps-category-content hidden">
            <p className="user-step-miles"></p>
            <p className="user-steps-today"></p>
            <p className="user-met-step-goal-today"></p>
            <p className="user-days-exceeding-goal"></p>
            <p className="community-steps-today"></p>
          </div>
        </div>
  
        <article id="water" className="category">
          <h2 className="category-title">Water</h2>
          <img className="water-icon" src="../assets/drops.svg" alt="water drop as hydration icon" />
          <div className="water-category-content hidden">
            <p className="water-stats"></p>
          </div>
        </article>
  
        <article id="stairs" className="category">
          <h2 className="category-title">Stairs</h2>
          <img className="stairs-icon" src="../assets/success.svg" alt="staircase as stair icon"/>
          <div className="stairs-category-content hidden">
            <p className="community-average-stairs"></p>
            <p className="user-record-stairs"></p>
          </div>
        </article>
  
        <article id="active-minutes" className="category">
          <h2 className="category-title">Active Minutes</h2>
          <img className="active-icon" src="../assets/heart-shape-with-beats-line.svg" alt="shape of heart with line" />
          <div className="active-minutes-category-content hidden">
            <p className="user-minutes-active"></p>
            <p className="user-week-average-minutes-active"></p>
            <p className="community-average-minutes-active"></p>
          </div>
        </article>
  
        <article id="sleep-cat" className="category">
          <h2 className="category-title">Sleep</h2>
          <img className="sleep-icon" src="../assets/clock.svg" alt="pillow and clock as sleep icon"/>
          <div className="sleep-container sleep-category-content hidden">
            <article className="user-all-time-sleep-stats">
              <h3 className="sleep-title">Your All-Time Sleep Stats</h3>
            </article>
              <p className="sleep-average-hours-input"></p>
              <p className="sleep-average-quality-input"></p>
          </div>
        </article>
      </section>
    )
}

export default Stats;