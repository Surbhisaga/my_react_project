import React, { useState } from 'react';

const App = () => {
    const purple  = '#8e44ad';   
    //array de-structuring
    const [bg , setBg ] = useState(purple);

    const [name,setName] = useState('Click Me');

    const bgChange = () => {
        // console.log("clicked");
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
            <button onClick={bgChange} onDoubleClick = {bgBack}> {name}</button>
            {/* <button onMouseEnter={bgChange} onMouseLeave = {bgBack}> {name}</button> */}
        </div>
        </>
    )
};

export default App;