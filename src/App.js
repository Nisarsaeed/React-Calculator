import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
function App() {
  return (
    <div className="App">
      <div className="calculator">
          <Display displayValue = "0" />
          <KeysPannel />
      </div>
    </div>
  );
}

export default App;
