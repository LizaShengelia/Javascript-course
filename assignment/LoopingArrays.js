const populations = [1141, 8, 6, 7];


function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    let percentage = percentageOfWorld1(populations[i])
    percentages2.push(percentage)
}

console.log(percentages2)
