# Iterations NodeJS Package

## Simple method for mathematical iteratives

Iterations JS is a simple package that is able to create mathematical iterative objects based on recursive formulas, e.g. fibonacci, etc.

It is extremely easy to use this library in a Node.js project.

First, navigate to a terminal with nodeJS and npm installed, and type in:

```
$ npm install iterations
```

Then, you can navigate to a javascript file in your directory, where you can use the object as such:

#### index.js

```
const iter = require('iterations')
```

Then, to create an iterable object, you must initialize it with the initial value of the recursive sequence. This can be done in one of two ways:

- Create an object and initialize at the same time.
  - This is a better idea if you are planning to run the process without any user input.

#### index.js

```
const Iter = require('iterations')
let i = new Iter(20)
// This initializes a new iterative object i with the value 20
```

- Create an object and initialize at a later time.
  - This may be preferred if user input must be taken at a later time.

#### index.js

```
const iter = require('iterations')
const i = new Iter()

// Code here
//i is not yet initialized

i.initialize(20)
// i is now initialized
```

Keep in mind that any other iteratives tasks fail if i is not initialized.

Refer to `/examples/collatz.js` and `/examples/fibonacci.js` in the GitHub repo for more context (keep in mind that you will have to change the local-based require tags to properly get functionality.)
