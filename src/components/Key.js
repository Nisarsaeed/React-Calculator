function Key({value, onclick}) {
  return (
    <button className="key" onClick={onclick}>
      {value}
    </button>
  );
};
export default Key;