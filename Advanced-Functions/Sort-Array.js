/**
 * Created by Aleksandar on 16/07/2017.
 */

function sortArray(inputArray, sortMethod) {

    let ascendingComparator=function (a, b) {
        return a-b;
    };

    let descendingComparator = function (a, b) {
        return b-a;
    };

    let sortingStrategy = {
        'asc':ascendingComparator,
        'desc':descendingComparator
    };

    return inputArray.sort(sortingStrategy[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));