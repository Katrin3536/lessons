import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString);
            setValue(valueAsNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value));
    }, [value]);

    const incHandler = () => {
        setValue(value + 1);

    };
    // const setToLocalStorage = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value));
    //     // localStorage.setItem('counterValue +1', JSON.stringify(value + 1));
    // };

    // const getFromLocalStorage = () => {
    //     let valueAsString = localStorage.getItem('counterValue');
    //     if (valueAsString) {
    //         let valueAsNumber = JSON.parse(valueAsString);
    //         setValue(valueAsNumber);
    //     }
    // };

    // const clearLocalStorage = () => {
    //     localStorage.clear();
    //     setValue(0);
    // };
    //
    // const removeItemclearLocalStorage = () => {
    //     localStorage.removeItem('counterValue +1');
    // };

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorage}>setToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorage}>getFromLocalStorage</button>*/}
            {/*<button onClick={clearLocalStorage}>clearLocalStorage</button>*/}
            {/*<button onClick={removeItemclearLocalStorage}>removeItemclearLocalStorage</button>*/}
        </div>
    );
}

export default App;
