// an Immediately Invoked Function Expression, is basically just a function that is declared and called at the same time.

//example 1: callbacks. in this case, the function used as a parameter when calling foo is an IIFE.
// function foo(callback){

// };

// foo(function(){
//     //do something.
// })

//example 2: creating and running the fuction immediately.
// (function foo(){
//     // some code 
// })();

//example 3: the es6 way of doing an iife
// ((foo) => foo)('foo value');