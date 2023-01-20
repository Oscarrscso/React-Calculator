const Buttons = () =>{
    return(
    <div className="buttons">
        <div className="buttonGrid">
            <button className="nums">7</button>
            <button className="nums">8</button>
            <button className="nums">9</button>
            <button className="oper">+</button>
            <button className="nums">4</button>
            <button className="nums">5</button>
            <button className="nums">6</button>
            <button className="oper">-</button>
            <button className="nums">1</button>
            <button className="nums">2</button>
            <button className="nums">3</button>
            <button className="oper">×</button>
            <button className="nums">0</button>
            <button className="nums">.</button>
            <button className="oper">C</button>
            <button className="oper">÷</button>
            <div className="spacer"></div>
            <button className="equal">=</button>
        </div>
    </div>   
    )
}

export default Buttons;