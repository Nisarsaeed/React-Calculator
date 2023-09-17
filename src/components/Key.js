
function Key(props){
 return (   
  <button className="key" onClick={props.onClick}>
    {props.value}
  </button>
);
};
export default Key;