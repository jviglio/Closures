// Import stylesheets
import './style.css';

// var createCounter = function(n) {
//   return function() {
//       return n++;
//   };
// };

const createCounter = n => () => n++;


const counter = createCounter(10)
console.log(counter()) 
console.log(counter())
console.log(counter())
