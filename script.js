
//Part 1
// Declare a global counter variable.
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function recursiveFunction() {
  counter++;
  recursiveFunction();
}

// Surround the initial function call in a try/catch block.
try {
  recursiveFunction();
} catch (error) {

  console.log("Error:", error.message);
  console.log("Counter value:", counter);
}

// part 2
// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.

const flattenRegular = (arr) => {
  if (arr.length === 0) return []; 
  
  const first = arr[0];
  const rest = arr.slice(1);
  
  if (Array.isArray(first)) {
    return flattenRegular(first).concat(flattenRegular(rest));
  } else {
    return [first].concat(flattenRegular(rest));
  }
}

// Once your recursive function is complete, trampoline it.

const flattenTramp = (arr, result = []) => {
  if (arr.length === 0) return result;
  
  const first = arr[0];
  const rest = arr.slice(1);
  
  if (Array.isArray(first)) {
    return () => flattenTramp(first.concat(rest), result);
  } else {
    return () => flattenTramp(rest, result.concat([first]));
  }
}

//Part 3
// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable
const primeListElement = document.getElementById('primeList');

function findPrimes(n) {
  const primes = [];
  

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
 
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  

  primeListElement.innerHTML = '<strong>Prime numbers between 1 and ' + n
  
  
  alert('Calculation is finished.');
}