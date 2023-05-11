// Function Composition Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65 Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000 Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function 

function compose(functions, x) {
    if (functions.length === 0) {
      return x;
    }
  
    return functions.reduceRight((result, func) => func(result), x);
  }
  
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const x1 = 4;
const output1 = compose(functions1, x1);
console.log(output1); // Output: 65

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const x2 = 1;
const output2 = compose(functions2, x2);
console.log(output2); // Output: 1000

const functions3 = [];
const x3 = 42;
const output3 = compose(functions3, x3);
console.log(output3); // Output: 42
