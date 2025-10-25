function mergeSort(arr) {
    let length = arr.length;

    if (length <= 1) {
        return arr;
    }

    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
};


function merge(arr1, arr2) {
    let sortedArr = [];

    let lengthOne = arr1.length;
    let lengthTwo = arr2.length;

    let i, j, k;
    i = j = k = 0;

    while(i < lengthOne && j < lengthTwo) {
        if(arr1[i] < arr2[j]) {
            sortedArr[k++] = arr1[i];
            i++;
        } else {
            sortedArr[k++] = arr2[j];
            j++;
        }
    }

    for(; i < lengthOne; i++) {
        sortedArr[k++] = arr1[i];
    }

    for(; j < lengthTwo; j++) {
        sortedArr[k++] = arr2[j];
    }

    return sortedArr;
}

let arr = [42, 7, 19, 3, 25, 11, 90, 2, 33];
console.log(mergeSort(arr));
