import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  const baseUrl = 'http://localhost:9192';

  useEffect(() => {
    setLoading(true);

    fetch(baseUrl + '/users/all')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-intro'>
          <h2>Users</h2>
          {
            users.map(user => 
              <div key={user.id}>
                <p>{user.firstName}</p>
                <p>{user.email}</p>
              </div>
            )
          }   
      </div>
      </header>
    </div>
  );
}

export default App;
