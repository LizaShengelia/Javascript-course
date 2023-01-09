function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? (bill / 100) * 15 : (bill / 100) * 20;
    return tip
}
console.log(calcTip(44))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills,
    tips,
    total)

// objects

const myCountry = {
    country: "georgia",
    capital: "tbilisi",
    language: "qartuli",
    population: 8,
    neighbours: ["turqeti", "azerbaijani", "ruseti"]
}

console.log(myCountry.language)
