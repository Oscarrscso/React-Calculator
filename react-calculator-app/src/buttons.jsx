import { useState } from 'react';

let curr = ''
let prev = ''



const Buttons = () =>{
    const [count, setCount] = useState (0)
    return(
        <div className="buttonGrid">
            <div className="display">
                <div id='prevD'>321321</div>
                <br />
                <div id='currD'>{count}</div>
            </div>
            <button className="AC">AC</button>
            <button className="DEL">DEL</button>
            <button className="oper">+</button>

            <button id="7" className="nums">7</button>
            <button id="8" className="nums">8</button>
            <button id="9" className="nums">9</button>

            <button className="oper">-</button>

            <button id="4" className="nums">4</button>
            <button id="5" className="nums">5</button>
            <button id="6" className="nums">6</button>
            <button className="oper">×</button>

            <button id="1" className="nums" onClick={() => setCount (count + 1)}>1</button>
            <button id="2" className="nums">2</button>
            <button id="3" className="nums">3</button>

            <button className="oper">÷</button>

            <button id="0" className="nums">0</button>
            <button id="." className="nums">.</button>

            <button className="equal">=</button>
        </div>
    )
}


export default Buttons;


