function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population)
    return `${country} has ${population} million people, wich is about ${percentage}% of the world`

}

console.log(describePopulation("georgia", 8))

