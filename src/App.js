import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="f-heading">
        <h1>Features</h1>
        <p>Here are some of the awesome features in this framework</p>
      <Features/>
      </div>
    </div>
  );
}

export default App;
