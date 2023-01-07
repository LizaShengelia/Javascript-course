const bill = 40

const tip = bill <= 300 && bill >= 50 ? (bill / 100) * 15 : (bill / 100) * 20;

console.log(`${bill}, ${tip}, ${bill + tip}`)
