const calcAverage = (number1, number2, number3) => (number1 + number2 + number3) / 3;

const avgDolhins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return `dolphins win (${avgDolhins} vs ${avgKoalas})`
    } else if (avgKoalas >= 2 * avgDolhins) {
        return `koalas win (${avgKoalas} vs ${avgDolhins})`
    } else {
        return `no one wins`
    }

}

console.log(checkWinner(avgDolhins, avgKoalas))
