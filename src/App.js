import './App.css';
import Key from './components/Key';
function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          0
        </div>
        <div className='cal-body'>
        <div className='row'>
          <Key numberPress = "+" />
          <Key numberPress = "-" />
          <Key numberPress = "x" /> 
          <Key numberPress = "/" />  
        </div>
          <div className='row'>
          <Key numberPress = "7" />
          <Key numberPress = "8" />
          <Key numberPress = "9" />  
          </div>
          <div className='row'>
          <Key numberPress = "4" />
          <Key numberPress = "5" />
          <Key numberPress = "6" />  
          </div>
          <div className='row'>
          <Key numberPress = "1" />
          <Key numberPress = "2" />
          <Key numberPress = "3" />  
          </div>
          <div className='row'>
          <Key numberPress = "." />
          <Key numberPress = "0" />
          <Key numberPress = "AC" />  
          </div>
          <div className='row'>
          <Key numberPress = "=" />  
          </div>

           
        </div>
      </div>
    </div>
  );
}

export default App;
