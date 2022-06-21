import React, {useState} from 'react'

export default function Counter() {
    const [nbCount, setNbCount] = useState(0);

    const style = {
        container: {
            padding:"2rem"
        },
        label: {
            fontsize:20,
            fontWeight:"bold"
        },
        button: {
            paddind: "1rem"
        }
    }
    function doSome(){
        alert("I got clicked")
    }//idem que ()=> alert("") dans button
    return (
        <div style={style.container}>
            <h1>Hello I'm a counter</h1>
            <p style={style.label}>Counter value: {nbCount}</p>
            <button onClick={() => setNbCount(nbCount + 1)} style={style.button}>Click me</button>
        </div>
    )
}



