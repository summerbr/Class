import React from 'react';
import './App.css';
import Login from './components/Login'
import Counter from './components/Counter'
import FancyCounter from './components/FancyCounter'

function App() {
  return (
    <div className='App'>
      <Login />
      <Counter />
      <FancyCounter />
    </div>
  );
}

export default App;