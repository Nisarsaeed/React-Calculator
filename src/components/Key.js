function Key({value, onclick}) {
  return (
    <button className="key" onClick={onclick} type="button">
      {value}
    </button>
  );
};
export default Key;