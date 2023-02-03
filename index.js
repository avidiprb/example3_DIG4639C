import { reduce } from "./exercises.js";

import { loop } from "./exercises.js";

import { everyLoop } from "./exercises.js";

import { everySome } from "./exercises.js";

console.log("Hello");
let quotes = ["Health is wealth", "All that glitters is not gold", "Morning doesn't show the day"]
var n = Math.floor(Math.random() * 3);
console.log(quotes[n]);
//
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(arrays,(a,b)=>a.concat(b),[]));

loop(3, n => n > 0, n => n - 1, console.log);

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → false

console.log(everySome([13, 11, 12], n => n < 10));
// → false

console.log(everySome([1, 11, 12], n => n < 10));
// → true
