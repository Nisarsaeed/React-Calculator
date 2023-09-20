import Key from "./Key";
import "./keypannel.css"
export default function KeysPannel({ onKeyClick }) {
  const numericKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  const operatorKeys = ['+', '-', 'x', '/'];
  const specialKeys = ['AC', '='];
  return (
    <div className="key-panel">
      {numericKeys.map((value, index) => (
        <Key key={index} value={value} onclick={onKeyClick} />
      ))}
      {specialKeys.map((value, index) => (
        <Key key={index} value={value} onclick={onKeyClick} />
      ))}
      {operatorKeys.map((value, index) => (
        <Key key={index} value={value} onclick={onKeyClick} />
      ))}
    </div>
  );
};