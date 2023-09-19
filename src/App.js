import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
import { useCalculator } from './calculatorLogic'
function App() {
  const {
    result,
    calculate,
    numKeyClicked,
    operatorClicked,
    resetValues
  } = useCalculator();
  function handleClick(event) {
    const clickedValue = event.target.textContent;
    switch (clickedValue) {
      case '+':
      case '-':
      case '/':
      case 'x':
        operatorClicked(clickedValue);
        break;
      case '=':
        calculate();
        break;
      case 'AC':
        resetValues();
        break;
      default:
        if (/^[0-9]+$/.test(clickedValue)) {
          numKeyClicked(clickedValue);
        }
    };
  };
  return (
    <div className="App">
      <div className="calculator">
        <Display displayValue={result} />
        <KeysPannel onKeyClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
