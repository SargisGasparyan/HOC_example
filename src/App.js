import React from 'react';
import { CompOneHandle } from './CompOne';
import { CompTwoHandle } from './CompTwo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CompOneHandle
        styleObj={{
          fontSize: '50px',
          color: 'red',
          border: '2px solid gray',
        }}
      />
      <CompTwoHandle background="gray" />
    </div>
  );
};

export default App;
