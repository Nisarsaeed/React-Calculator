import { useState, } from 'react';
import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
function App() {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState('');
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
    }
  }
  function numKeyClicked(number) {
    console.log(number);
    setResult((currentValue) => currentValue += number);
  }
  function operatorClicked(operator) {
    setFirstValue((value) => value = parseFloat(result));
    setResult((preValue) => preValue = '');
    setSelectedOperator((currentOperator) => currentOperator = operator);
  }
  function calculate() {
    setResult((value) => parseFloat(value));
    switch (selectedOperator) {
      case '+':
        setResult((preValue) => firstValue + preValue);
        break;
      case '-':
        setResult((preValue) => firstValue - preValue);
        break;
      case 'x':
        setResult((preValue) => firstValue * preValue);
        break;
      case '/':
        setResult((preValue) => firstValue / preValue);
        break;
      default:
        console.log('No operator selected');
    }
  }
  function resetValues() {
    setFirstValue((currentValue) => currentValue = 0);
    setResult((value) => value = '');
    setSelectedOperator((operator) => operator = '');
  }
  return (
    <div className="App">
      <div className="calculator">
        <Display displayValue={result} />
        <KeysPannel onKeyClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
