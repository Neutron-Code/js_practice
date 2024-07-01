// This is the code for the Apply Method used for the function

function greetMe(age){
    return `My fullname is ${this.firstName
    } ${this.lastName} and my age is ${age}`
}

const person = {
    firstName: 'Harish',
    lastName: 'puri'
}
const greet = greetMe.apply(person, [17]);

console.log(greet)