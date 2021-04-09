function add(runningTotal, currentValue){
    return runningTotal + currentValue; 
}


let nums = [1, 2, 5];

let result = nums.reduce(add);

console.log(result);
let myName = "Lisa";
console.log(`Well, now we know that ${myName} is not ${result} years old!`);