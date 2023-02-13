const teamOne = "Dolphins";
const teamTwo = "Koalas";

const teamOneAverage1 = (97 + 112 + 101) / 3;
const teamTwoAverage2 = (109 + 95 + 106) / 3;
const minimumScore = 100


if (teamOneAverage1 > teamTwoAverage2 && teamOneAverage1 >= minimumScore) {
    console.log(`winner is ${teamOne}`)
} else if (teamOneAverage1 === teamTwoAverage2) {
    console.log("its draw")
} else if (teamOneAverage1 < teamTwoAverage2 && teamTwoAverage2 >= minimumScore) {
    console.log(`winner is ${teamTwo}`)
}
