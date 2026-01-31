//TypeError: sayHi is not a function
/*
sayHello is a function declaration → fully hoisted (name + body). 
Calling sayHello() before its definition works and logs "Hello".
sayHi is a function expression assigned to a var → the variable sayHi is hoisted but initialized as undefined. Calling sayHi() before 
the assignment tries to call undefined and throws TypeError: sayHi is not a function.
*/

//correct version:-
sayHello();
function sayHello() {
    console.log("Hello");
}

var sayHi = function () {
    console.log("Hi");
};
sayHi();
