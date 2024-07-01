const maxNum = 100000000;
const log = document.querySelector('#xhr');

function isPrime(number){
    for(let i = 2; i < Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }

    return (number > 1)
}

const randomNumber = (limit) => Math.floor(Math.random() * limit);

function getPrime(){
    const primes = [];
    while(primes.length < 10000000){
        const randomNumberGenerated = randomNumber(maxNum);
        if(isPrime(randomNumberGenerated)){
            primes.push(randomNumberGenerated);
        }
    }

    return primes;
}

const sortedArray = (array) => array.sort((a, b) => a - b) 
const primesArray = getPrime();
const sortedPrimesArray = sortedArray(primesArray);

log.addEventListener('click', () => {
    console.log('I am Clicked and I am alive')
})

console.log(sortedPrimesArray);