const Transforms = require("../index");
let collatz = new Transforms(10);
// Initialization at start

/* The setIterator(function) method creates an iterating function based on the function passed in. in this case, it models the Collatz Conjecture. 
Returning NaN terminates. The value passed in is the value to be operated upon, and the value returned is the value of the function to append.
 */

collatz.setIterator((vals) => {
    let v, val
    val = vals[vals.length - 1]
    if (typeof val != "number" || val == NaN) {
        v = NaN;
    }
    v = Math.floor(val);
    if (v < 1) {
        v = NaN;
    }
    if (v % 2 == 0) {
        v = v / 2;
    } else {
        v = 3 * v + 1;
    }
    return v

})

/* The iterate(stop) method performs the iteration. The parameter passed in is the stop condition - returning true terminates, while returning false does not
    The function that is passed as a parameter is called with the argument here shown as info, which is an object:
    info = {
        startLength: #,
        list: [....]
    }
    where startlength is the length of the set of values at the beginning, while list is the list of values, as of current.

 */
q = collatz.iterate((info) => {
    vals = info.list
    if (vals[vals.length - 1] <= 1) {
        return true
    }
    return false
});

// The getVals method returns a list of values that have been part of the iteration.
console.log(collatz.getVals())