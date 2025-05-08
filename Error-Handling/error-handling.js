console.log(x); // ReferenceError: x is not defined


eval('var x = 10;'); //syntax error


let y = 10;
y.toUpperCase(); // TypeError: y.toUpperCase is not a function

let arr = new Array(-1);
console.log(arr); //rangeError: Invalid array length


decodeURI('%'); // url error: Invalid URI sequence

// This error is theoretical; modern JS usually doesn't throw it anymore.
throw new EvalError("Eval error example");



Promise.any([
    Promise.reject("Error 1"),
    Promise.reject("Error 2")
  ]).catch(e => console.log(e.errors)); // AggregateError: All promises were rejected
  

function myFunction() {
    myFunction(); // Stack overflow error
}
myFunction(); // internal error



