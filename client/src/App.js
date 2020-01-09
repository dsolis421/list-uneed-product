import React from 'react';
import NeedList from './components/NeedList'
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>uNeed</h1>
        <h3>Never forget what you need most</h3>
      </header>
      <NeedList />
    </div>
  );
}

export default App;
