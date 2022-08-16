import React from 'react';
import 'reset-css'
import './App.css';
import {Counter} from "./counter/Counter";

export const App = React.memo(() => {
    console.log('App')
  return (
    <div className="App">
      <Counter/>
    </div>
  );
})

export default App;
