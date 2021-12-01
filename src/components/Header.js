import React, { useEffect } from 'react';

const Header = ({user}) => {
  return (
      <header>
          <h1>F I T L I T</h1>
          <h2>Hi, {user}</h2>
      </header>
  )
}

export default Header;