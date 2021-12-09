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
import testData from './testData';

const App = () => {
  const [user, setUser] = useState({})
  
  const loadUserInfo = async () => {
    //refactor below to make id dynamic
    const userToFind = await testData.find(user => user.id === 1)
    setUser(userToFind)
  }
  useEffect ((id) => {
    //refactor this to take in a dynamic user on login
    loadUserInfo(id = 1);
  }, [])

  return (
    <>
    <Header user={user.name}/>
    <main>
      <User userName={user.name}/>
      <Stats user={user.name}/>
      <TimeDisplay user={user.name}/>
      <Graph user={user.name}/>
      <WeekStats user={user.name} />
      <Friends user={user.name} />
    </main>
    </>
  );
}

export default App;
