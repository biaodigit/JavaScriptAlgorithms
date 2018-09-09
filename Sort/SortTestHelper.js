/**
 * Created by di on 2017/6/10.
 */
var swap = function (arr, curr, min) {
    var temp = arr[curr];
    arr[curr] = arr[min];
    arr[min] = temp;
}

var generateRandomArray = function (n, rangeL, rangeR) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (rangeR - rangeL + 1)))
    }
    return arr;
}

var testSort = function (fn) {
    var start = new Date();
    console.log(start)
    var arr = [].slice.call(arguments, 1);
    fn.apply(this, arr);
    var end = new Date();
    console.log(end);
    var time = end - start;
    console.log(time);
}

var isSorted = function (n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}