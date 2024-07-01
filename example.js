<<<<<<< HEAD
function logingMessage(log){
    console.log(log);
}

const newfunction = logingMessage.bind(null, 'Hello Harish, this is void')
setTimeout(newfunction, 1000);
=======
// This is the code for the Apply Method used for the function

function greetMe(age){
    return `My fullname is ${this.firstName} ${this.lastName} and my age is ${age}`
}

const person = {
    firstName: 'Harish',
    lastName: 'puri'
}
const greet = greetMe.apply(person, [17]);

console.log(greet);
>>>>>>> myBranch
