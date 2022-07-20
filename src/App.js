import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      <div>Add some more information</div>
      <MyComponent/>
      <SecondComponent/>
    </div>
  );
}

export default App;
