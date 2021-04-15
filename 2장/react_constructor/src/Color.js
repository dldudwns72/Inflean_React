import React, {useState} from 'react';

export default function Color() {
    const [color,setColor] = useState("red");

    function changeColor() {
        setColor('blue')
    }
    
    return(
        <button onClick={changeColor} style = {{backgroundColor : color}}>색상 변경</button>
    )
}