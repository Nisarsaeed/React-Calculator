// import { useState, useRef, useEffect } from 'react';
import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
function App() {
  
  function operatorClicked(){
    alert('nidsfs');
  };
  return (
    <div className="App">
      <div className="calculator">
          <Display displayValue = "0" />
          <KeysPannel onKeyClick={operatorClicked}/>
      </div>
    </div>
  );
}

export default App;
