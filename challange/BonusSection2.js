function calcAverage(arr) {
    var sum = 0;
    for (var z = 0; z < arr.length; z++) {
        sum += arr[z];
    }

    let average = sum / arr.length;
    return average


}

console.log(calcAverage(bills))
