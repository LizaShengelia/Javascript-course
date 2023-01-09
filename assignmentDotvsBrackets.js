const myCountry1 = {
    country: "georgia",
    capital: "tbilisi",
    language: "qartuli",
    population: 8,
    neighbours: ["turqeti", "azerbaijani", "ruseti"]
}

console.log(`${myCountry1.country} has ${myCountry1.population} million georgian - speaking people, ${myCountry1.neighbours.length} neighbouring countries and a capital called ${myCountry1.capital}`)

myCountry1.population += 2

console.log(myCountry1)


myCountry1["population"] -= 8

console.log(myCountry1)

