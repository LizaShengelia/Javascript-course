const weightliza = 49;
const heightliza = 1.72;

const weightgio = 82;
const heightgio = 1.81;


const lizaBmi = weightliza / heightliza ** 2
const gioBmi = weightgio / heightgio ** 2

const markHigherBMI = gioBmi > lizaBmi

console.log(lizaBmi, gioBmi, markHigherBMI)

if (lizaBmi > gioBmi) {
    console.log(`lizabmi ${lizaBmi} is higher than giosbmi ${gioBmi}`)
} else {
    console.log(`giosbmi ${gioBmi} is higher than lizasbmi ${lizaBmi}`)
}
