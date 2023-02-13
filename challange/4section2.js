function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? (bill / 100) * 15 : (bill / 100) * 20;
    return tip
}


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []


for (let i = 0; i < bills.length; i++) {

    let total = calcTip(bills[i])
    tips.push(total)
    totals.push(total + bills[i])
    console.log(total)

}


console.log(tips)
console.log(totals)
