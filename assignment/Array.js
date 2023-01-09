const populations = [1141, 8, 6, 7];

if (populations.length === 4) {
    console.log(true)
} else {
    console.log(false)
}



function percentageOfWorld1(population) {
    return population / 7900 * 100;
}


const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages)


