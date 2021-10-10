import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Customer from './routes/customer';
import Student from './routes/student';
import Seller from './routes/seller';

function App() {
  return(
    <Router >
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: '20px'}}>
        <div style={{margin: '10px'}}> <Link to='/'> Home </Link></div>
        <div style={{margin: '10px'}}> <Link to='/customer'> Customer </Link></div>
        <div style={{margin: '10px'}}> <Link to='/seller'> Seller </Link></div>
        <div style={{margin: '10px'}}> <Link to='/student'> Student </Link></div>
      </div>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/customer'> 
          <Customer />
        </Route>
        <Route path='/seller'> 
          <Seller />
        </Route>
        <Route path='/student'> 
          <Student />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
