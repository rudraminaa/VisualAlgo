import React from "react"; // imports the react library
import { useState, useEffect } from "react"; // imports two reacthooks
import './SortingVisualizer.css' // import styling
import { mergeSort } from "../SortingAlgorithms/SortingAlgorithms.js";

function SortingVisualizer() {
    const [array, setArray] = useState([]); // array -> current value -> {}, setArray-> function to change currentValue i.e. Array

    function resetArray() {
        const newArray = [];

        for (let i = 0; i < 100; i++) {
            newArray.push(randomIntFromInterval(5, 1000));// push random numbers from this interval into the array;
        }

        setArray(newArray);// update the state of the array 
    }

    function runMergeSort() {// we use another function here because the orignal mergesort function has no idea os the state and the useState hook so as to use that we come here.
        const sortedArray = mergeSort([...array]); //... is the spread operator which creates the copy of the array returned by the mergeSort function, react likes the state to be read-only so as to not mess with the values we create a copy using the spread keyword.
        setArray(sortedArray);
    }

    function arraysareEqual(arrayOne, arrayTwo) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) return false;
        }
        return true;
    }
    // function quickSort() { }
    // function heapSort() { }
    // function bubbleSort() { }

    useEffect(() => { // when the page opens run the resetArray function, Hey React after you render the component do the following
        resetArray();
    }, []) // [] means to do it only once, no brackets -> keep doing it do not stop, [something] when this something changes use effect runs

    return (
        <>
            <div className="array-container">
                {array.map((value, idx) => (// this is just a map mapping those randomly generated values in the array to an idx
                    // The height needs to be along with each div because the array.map is creating new div for each randomly created array so putting the height in this map itself is like putting height[i] in a for loop
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                    </div>
                ))}
            </div>
            <div className="gen">
                {/* Calls resetarray->useState->setArray*/}
                <button onClick={resetArray}> Generate new array</button>
                <button onClick={runMergeSort}>Merge Sort</button>
                {/* <button onClick={quickSort}>Quick Sort</button>
                <button onClick={heapSort}>Heap Sort</button>
                <button onClick={bubbleSort}>Bubble Sort</button> */}
            </div>
        </>
    );
}

function randomIntFromInterval(min, max) {// this is just the randomizer that we are using, the helper function
    return Math.floor(Math.random() * (max - min + 1) + min);// makes the given math.random() into an actual integer
}

export default SortingVisualizer; // other files are allowed to import this