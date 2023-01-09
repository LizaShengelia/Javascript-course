const jonas1 = {
    firstName: "jonas",
    lastName: "kogua",
    age: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDriverLicence: true,
    calcAge: function () {
        this.age = 2037 - this.age;
        return this.age;
    },

    // driverLicence: function () {
    //     if this.hasDriverLicence === true
    //     removeEventListener

    // },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} years old ${jonas1.job}, `

    }

}
console.log(jonas1.calcAge())
console.log(jonas1.getSummary())

// jonas is a 46 years old teacher, and he has a/no driver licence.
