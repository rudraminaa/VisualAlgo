export function mergeSort(array) { // here we are creating a simple function with export which allows other files to inmport it
    if (array.length <= 1) return array;// base case of the recursion already sorted array

    const middleIdx = Math.floor(array.length / 2); // finds the middle index
    const fistHalf = mergeSort(array.slice(0, middleIdx));//function called recursively on the first half
    const secondHalf = mergeSort(array.slice(middleIdx));// function called recursively on the second half

    const sortedArray = [];//creates an empty sorted array

    let i = 0; // for left array
    let j = 0; // for right array

    while (i < fistHalf.length && j < secondHalf.length) { // this means while left and right array both still have elements
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);// push the current element and then increment i
        }
        else {
            sortedArray.push(secondHalf[j++]);//push the current elements and then increment j
        }
    }

    while (i < fistHalf.length) { // add leftovers from left side
        sortedArray.push(firstHalf[i++]);
    }

    while (j < secondHalf.length) {// add leftovers from right side
        sortedArray.push(secondHalf[j++]);
    }

    return sortedArray;

}