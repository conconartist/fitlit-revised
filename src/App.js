import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import User from './components/User';

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
    </main>
    </>
  );
}

export default App;
