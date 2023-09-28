export const Key = ({value, onclick}) => {
  
  return (
    <button className="key" onClick={onclick} type="button">
      {value}
    </button>
  );
};