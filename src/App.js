import { useState, useRef, useEffect } from 'react';
import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="App">
      <div className="calculator">
          <Display displayValue = "0" />
          <KeysPannel onKeyClick={()=>operatorClicked}/>
      </div>
    </div>
  );
}

export default App;
