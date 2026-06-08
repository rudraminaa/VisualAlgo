import React from "react"; // imports the react library
import { useState, useEffect } from "react"; // imports two reacthooks
import './SortingVisualizer.css' // import styling

function SortingVisualizer() {
    const [array, setArray] = useState([]); // array -> current value -> {}, setArray-> function to change currentValue i.e. Array

    function resetArray() {
        const newArray = [];

        for (let i = 0; i < 100; i++) {
            newArray.push(randomIntFromInterval(5, 1000));// push random numbers from this interval into the array;
        }

        setArray(newArray);// update the state of the array 
    }

    useEffect(() => { // when the page opens run the resetArray function, Hey React after you render the component do the following
        resetArray();
    }, []) // [] means to do it only once, no brackets -> keep doing it do not stop, [something] when this something changes use effect runs

    return (
        <>
            {array.map((value, idx) => (// this is just a map mapping those randomly generated values in the array to an idx
                <div className="array-bar" key={idx}>
                    {value}
                </div>
            ))}
        </>
    );
}

function randomIntFromInterval(min, max) {// this is just the randomizer that we are using, the helper function
    return Math.floor(Math.random() * (max - min + 1) + min);// makes the given math.random() into an actual integer
}

export default SortingVisualizer; // other files are allowed to import this