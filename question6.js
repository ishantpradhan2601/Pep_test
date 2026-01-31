/* Predicted output :- undefined
ReferenceError: Cannot access 'b' before initialization 
The first line prints undefined, then execution stops at 
console.log(b) with a ReferenceError, so test() never runs.*/

var a = 10;
let b = 20;
console.log(a); 
console.log(b); 

function test() {
  var c = 30;
  console.log(c); 
}
test();


