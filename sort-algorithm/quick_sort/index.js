function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        if (el < pivot) {
            left.push(el);
        } else {
            right.push(el);
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)];
}

const arr1 = [10, 7, 8, 9, 1, 5];
const arr2 = [3, 0, 2, 5, -1, 4, 1];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr5 = [5, 3, 8, 4, 2, 7, 1, 10];
const arr6 = [12, 4, 78, 23, 45, 67, 89, 34];
const arr7 = [1, 1, 1, 1, 1, 1, 1];
const arr8 = [2, 3, 2, 3, 2, 3, 2, 3];
const arr9 = [100, 200, 300, 400, 500];
const arr10 = [500, 400, 300, 200, 100];

console.log('arr1', arr1, "quick_sort", quick_sort(arr1)); // [ 1, 5, 7, 8, 9, 10 ]
console.log('arr2', arr2, "quick_sort", quick_sort(arr2)); // [ -1, 0, 1, 2, 3, 4, 5 ]
console.log('arr3', arr3, "quick_sort", quick_sort(arr3)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log('arr4', arr4, "quick_sort", quick_sort(arr4)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log('arr5', arr5, "quick_sort", quick_sort(arr5)); // [ 1, 2, 3, 4, 5, 7, 8, 10 ]
console.log('arr6', arr6, "quick_sort", quick_sort(arr6)); // [ 4, 12, 23, 34, 45, 67, 78, 89 ]
console.log('arr7', arr7, "quick_sort", quick_sort(arr7)); // [ 1, 1, 1, 1, 1, 1, 1 ]
console.log('arr8', arr8, "quick_sort", quick_sort(arr8)); // [ 2, 2, 2, 2, 3, 3, 3, 3 ]
console.log('arr9', arr9, "quick_sort", quick_sort(arr9)); // [ 100, 200, 300, 400, 500 ]
console.log('arr10', arr10, "quick_sort", quick_sort(arr10)); // [ 100, 200, 300, 400, 500 ]
