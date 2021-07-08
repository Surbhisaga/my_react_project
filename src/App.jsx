import React, { useState } from 'react';



const App = () => {
    //count
    const state = useState();
    const[count , setCount] = useState(0);

    const purple  = '#8e44ad';   

    //array de-structuring
    const [bg , setBg ] = useState(purple);

    const [name,setName] = useState('Click Me');

    const bgChange = () => {
        setCount(count + 1);
        // console.log("clicked "+count++);
        let newBg ="#34495e";
        setBg(newBg);
        setName('ouch!! ')
    }

    const bgBack = () => {
        setBg(purple);
        setName("ayyo!!");
    }

    return(
        <>
        <div style={{backgroundColor : bg }}>
            <h1> {count} </h1>
            <button onClick={bgChange} onDoubleClick = {bgBack} > {name}</button>
            {/* <button onMouseEnter={bgChange} onMouseLeave = {bgBack}> {name}</button> */}
        </div>
        </>
    )
};

export default App;