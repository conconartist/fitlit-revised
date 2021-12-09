import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import User from './components/User';
import Stats from './components/Stats';
import TimeDisplay from './components/TimeDisplay';
import Graph from './components/Graph';
import WeekStats from './components/WeekStats';
import Friends from './components/Friends';

const App = () => {
  const [user, setUser] = useState("")
  
  useEffect (() => {
    //refactor this to take in a dynamic user on login
    setUser("Connie")
  })

  return (
    <>
    <Header user={user}/>
    <main>
      <User user={user}/>
      <Stats user={user}/>
      <TimeDisplay user={user}/>
      <Graph user={user}/>
      <WeekStats user={user} />
      <Friends user={user} />
    </main>
    </>
  );
}

export default App;
