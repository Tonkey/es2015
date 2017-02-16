// this .js file will illustrate how hoisting works by simple code
// be aware that much of the code is out-commented, but still valid js code that can be in-commented and run at any point

//a) variable hoisting; the following code will illustrate that all variables are "hoisted"(all variables are declared at the top, and not in-place)
// (function(){
//     var foo = 1;
//     var bar = 2;
//     var baz = 3;

//     alert(foo + " " + bar + " " + baz); // this will, as expected, print 1 2 3
// })

// (function(){
//     var foo = 1;
//     alert(foo + " " + bar + " " + baz); // this will print 1 undefined undefined (note if the variables were declared in-place, it should print referenceError)
//     var bar = 2;
//     var baz = 3;
// })

// (function(){
//     var foo = 1;
//     alert(foo + " " + bar + " " + baz); // this will print the referenceError mentioned before, since baz is no longer declared anywhere.
//     var bar = 2;
// })

//b) function hoisting; the following code will illustrate that all functions are "hoisted", note that functions assigned to a variable follows the same rules as normal variable hoisting

// foo(); // this will print the alert, since the function is "pulled" to the top of the file, and therefore declared long before we even reach the foo(); call.
// function foo(){
//     alert("Hello!");
// }

// foo(); // this will, as one might pressume, not give a referenceError, it will however give an exception since the variable foo is not instanciated as a function until after the foo(); call
// var foo = function(){
//     alert("Hello!");
// }
