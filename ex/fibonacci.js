const Transforms = require("../index");
const fibonacci = new Transforms();

/* The setIterator(function) method creates an iterating function based on the function passed in. in this case, it models Fibonacci numbers.
Returning NaN terminates. The value passed in is the value to be operated upon, and the value returned is the value of the function to append.
 */

fibonacci.setIterator((vals) => {
  let v, val;
  val = vals[vals.length - 1];
  val2 = vals[vals.length - 2];
  if (typeof val != "number" || val == NaN) {
    v = NaN;
  }
  v = Math.floor(val + val2);
  return v;
});

// Initialization after start
fibonacci.initialize(0);
// The addRecords method manually adds an arbitrary amount of records.
fibonacci.addRecords(1, 1);
console.log("a");

/* The iterate(stop) method performs the iteration. The parameter passed in is the stop condition - returning true terminates, while returning false does not
    The function that is passed as a parameter is called with the argument here shown as info, which is an object:
    info = {
        startLength: #,
        list: [....]
    }
    where startlength is the length of the set of values at the beginning, while list is the list of values, as of current.

 */
q = fibonacci.iterate((info) => {
  vals = info.list;
  if (vals[vals.length - 1] > 500) {
    return true;
  }
  return false;
});

//Get rid of last record with val 610, greater than 500
fibonacci.drop(1)

// The getVals method returns a list of values that have been part of the iteration.

console.log(fibonacci.getVals());