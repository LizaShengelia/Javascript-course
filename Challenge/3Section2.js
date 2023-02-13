const markBmi = {
    fullName: "mark miller",
    mass: 92,
    heigh: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.heigh) ** 2;
        return this.bmi
    }

}


const johnBmi = {
    fullName: "john smith",
    mass: 78,
    heigh: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.heigh) ** 2;
        return this.bmi
    }

}

const bmiJohn = johnBmi.calcBMI();
const bmiMark = markBmi.calcBMI();

johnBmi.unshift = bmiJohn
markBmi.unshift = bmiMark


if (bmiJohn > bmiMark) {
    console.log(`${johnBmi.fullName}'s BMI(${johnBmi.calcBMI()}) is higher than ${markBmi.fullName}'s BMI (${markBmi.calcBMI()})!`)
} else {
    console.log(`${markBmi.fullName}'s BMI(${markBmi.calcBMI()}) is higher than ${johnBmi.fullName}'s BMI (${johnBmi.calcBMI()})!`)
}

console.log(johnBmi)
