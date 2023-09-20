import Key from "./Key";
import "./keypannel.css";

export default function KeysPannel({onKeyClick}) {
  const keyValues = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', 'x', '0', 'AC', '=', '/'];

  return (
    <div className="key-panel">
      {keyValues.map((value, index) => (
        <Key key={index} value={value} onclick={onKeyClick} />
      ))}
    </div>
  );
};