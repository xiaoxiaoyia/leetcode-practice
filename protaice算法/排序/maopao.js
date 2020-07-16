let arr = [4, 1, 6, 9, 3, 2, 8, 7]

function getMin(arr) {
    if (arr === null || arr.length == 0) return;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null && arr[i] < arr[index]) {
            console.log(arr[i] < arr[index]);
            index = i;
        }
    }
    arr[index] = null;
    return index;
}

function sort(arr) {
    let newArr = new Array(arr.length);
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = getMin(arr);
    }
    return newArr;
}