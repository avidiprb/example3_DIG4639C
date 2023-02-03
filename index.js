import { reduce } from "./exercises.js";

import { loop } from "./exercises.js";

console.log("Hello");
let quotes = ["Health is wealth", "All that glitters is not gold", "Morning doesn't show the day"]
var n = Math.floor(Math.random() * 3);
console.log(quotes[n]);
//
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(arrays,(a,b)=>a.concat(b),[]));

loop(3, n => n > 0, n => n - 1, console.log);
