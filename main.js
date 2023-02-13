// 1. `.length`
//    * Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
//    * Console.log the length of the array.
//    * Use `node main.js` to run the program.
// 
let cars = ['Ford' , 'BMW' , 'Subaru' , 'Toyota'];
console.log(`1. length of cars is ${cars.length}`);
// 1. `.concat()`
//    * Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
//    * Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
//    * Console.log the new array.
//    * Run the program.
let moreCars = ['Porsche' , 'Volkswagen', 'Tesla', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// 1. `.indexOf()` and `.lastIndexOf()`
//    * Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
//    * Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.
//    * Run the program.
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// 1. `.join()`
//    * Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.
//    * Console.log `stringOfCars`.
//    * Run the program.
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// 1. `.split()`
//    * Use the `split` method to convert `stringOfCars` into an array called `carsFromString`.
//    * Console.log the array you just created.
//    * Run the program.
//     > BONUS: Go back and pass a comma (`','`) in as an argument to `.split()` to separate the cars into individual items in the array. This is called a *separator* and it can be any character you wish to separate strings by.
let carsFromString = stringOfCars.split(", ");
console.log(carsFromString);
// 1. `.reverse()`
//    * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.
//    * Console.log `carsInReverse`.
//    * Run the program.
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// 1. `.sort()`
//    * Use the `sort` method to put the array `carsInReverse` into alphabetical order.
//    * Based on the types of cars you used, predict which item in the array should be at index 0.
//    * Use the following code to confirm or reject your prediction: `console.log(carsInReverse.indexOf('yourPrediction'));`
console.log(carsInReverse.sort());
// 1. `.slice()`
//    * Create a `pets` array by copy/pasting the following: `const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']`
//    * Use the `slice` method to create a `reptiles` array with `snake` and `lizard` from the `pets` array.
//    * Console.log the `reptiles` array and run the program.
//    * Now console.log the `pets` array and run the program. Why do you think `snake` and `lizard` are still in the original array?

let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
let reptiles = pets.slice(4,6);
console.log(reptiles);
console.log(pets);
// 1. `.splice()`
//    * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
//    * Console.log `removedReptiles` and `pets` and run the program.
//    * Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?
let removedReptiles = pets.splice(4,2, 'hamster');
console.log(removedReptiles); 
console.log(pets);
// 1. `.pop()`
//    * Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
//    * Console.log `removedPet` and `pets` and run the program.
 pets.pop();
 console.log(pets);
let removedPet = pets.pop();
console.log(removedPet);
// 1. `.push()`
//    * Use the `push` method to add `removedPet` back to the end of the `pets` array.
//    * Console.log `pets` and run the program.
pets.push(removedPet);
console.log(pets);
// 1. `.shift()`
//    * Use the `shift` method to remove and console.log the first item in the `pets` array.
pets.shift();
console.log(pets);
// 1. `.unshift()`
//    * Use the `unshift` method to add the string `'turtle'` as the first item in the `pets` array.
//    * Console.log the `pets` array and run the program. If all went according to plan, you should see `['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird']`.
pets.unshift("turtle");
console.log(pets);
// 1. `.forEach()`
//    * Create a numbers array by copy/pasting the following: `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`
//    * Write code that will add 2 to each item in the array `numbers`.
//       * `forEach` requires a function to be passed into it as its first argument.
//       * Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`.
//       * Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as an argument, in order to add 2 to each number in the array.
//    * Console.log `numbers` and run the program.

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

function addTwo(num, index, arr) {
    arr[index] = num + 2; }

    numbers.forEach(addTwo)
    console.log(numbers)


// const result = numbers.map(a => a + 2);

// console.log(result);