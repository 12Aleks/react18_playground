import React, {useState} from 'react';
//dla togo cztoby udolit Batczing, primrenajetsa flushSync
import {flushSync} from "react-dom";

const BatchingExample = () => {
    const [state, setState] = useState(0);
    const [value, setValue] = useState(0);

    console.log('RENDER')

    const update = () => {
        //Batczing odin pererendering pri asinchronnych operacijach
        setTimeout(() => {
            //otmena Batczinga s pomoszju funkcii flushSync na kazdyj state
            flushSync(() => {
                setValue(prev => prev + 1);
            })
            flushSync(() => {
                setState(prev => prev + 1);
            })
        }, 1000)

    }

    return (
        <div>
            <h1>value = {value}</h1>
            <h1>state = {state}</h1>
            <button onClick={update}>Update</button>
        </div>
    );
};

export default BatchingExample;