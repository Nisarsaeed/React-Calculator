
function Key(props){
 return (   
  <button className="key" onClick={props.onclick}>
    {props.value}
  </button>
);
};
export default Key;