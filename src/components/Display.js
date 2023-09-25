export const Display = ({displayValue, preValue})=>{
    
    return (
        <div className="screen">
            <div className="preValue">{preValue}</div>
            <div className="currentValue"> {displayValue} </div>
        </div>
    )
}