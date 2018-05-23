### Block scope

```javascript
{
  var a = "block";
}
console.log(a); // prints out block
```

```javascript
function hello() {
  var a = "function";
}
hello();
console.log(a);
```
a is an undefined reference, raises an error

```javascript
function hello() {
  var a = "function";
  for (var i = 0; i < 10; i++) {
    var a = "block";
  }
  console.log(a);
}
hello();
```

a will print out block

#### Some block scope weirdness

```javascript
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  var y = i;
  funcs.push(function () {
    console.log(y);
  })
}
funcs.forEach(function (func) {
  func() // prints out 4 4 4 4 4
});
```

#### Using `let` to fix that

```javascript
var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
```

#### Using `const` to poromote immutability for your variables

```javascript
const hello = 'world'; // an immutable hello, you can't change that
hello = 'nope'; // error

// an object
const mutable = {};
mutable['trait'] = 'Hello world'; // this works

const foo = Object.freeze({}); // proper immutability for objects
foo.prop = 123;
console.log(foo.prop) // undefined
```

#### String interpolation
```javascript
let people = 'folks';

const message = `Hello all you happy ${people}`;
```

#### Fat arrow functions

In ES5 the this in functions is bound to the function (closure).

```javascript
let obj = {
  name: 'awesome',
  sayLater: function () {
    let self = this; // Assign to self
    console.log(self);
    setTimeout(function () {
      console.log(`${self.name}`); // Use self not this
    }, 1000);
  }
};
```

In ES6 the this in fat arrow functions are bound to the containing object 

```javascript
let obj = {
  name: 'awesome',
  sayLater: function () {
    console.log(this); // `this` points to obj
    setTimeout(() => {
      console.log(this); // `this` points to obj
      console.log(`${this.name}`); // `this` points to obj
    }, 1000);
  }
};
obj.sayLater();
```

#### Object destructuring is a new cool feature in ES6

```javascript
// we want to construct an object
const obj = {first: 'Benjamin', last: 'Button', age: 12 };

// and we could also deconstruct it
const { first: f, last: l } = obj;
console.log(f); // Benjamin
console.log(l); // Button

// multiple assignment using arrays
const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x); // a
console.log(y); // b

// destructuring when passing arguments
function f({ x }) {
  console.log(x); // Refer to x directly
}
f({ x: 1 });
```

#### For loops have multiple variants
```javascript

// a classic for loop
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// ES5 forEach loop
let array = [1, 2, 3];
array.forEach(function (value) {
  console.log(value);
});

// for-in combination to loop through obj props
var obj = {a: 1, b: 2};
for (let prop in obj) {
    console.log(prop);
}

// some implicit conversions in loops
let array = [10, 20, 30];
for (let index in array) {
  console.log(index);
  console.log(typeof(index)); // converted to strings
});

// a for that does not convert the keys
let array = [10, 20, 30];
for (var value of array) {
  console.log(value);
}
```

#### Maps and sets in ES6

```javascript
'use strict';

// Map
let map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);

let map2 = new Map()
  .set("A", 1)
  .set("B", 2)
  .set("C", 3);

let map3 = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3]
]);

for (let [key, value] of map) {
  console.log(key, value);
}

console.log(map.get("A"));
console.log(map.has("A"));
console.log(map.size);

map.delete("A");
console.log(map.size);

map.clear();
console.log(map.size);


// Set
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');


let set2 = new Set()
  .add('APPLE')
  .add('ORANGE')
  .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

console.log(set.has('APPLE'));

set.delete('APPLE');

console.log(set.size);

set.clear();
console.log(set.size);


let set4 = new Set();
set3.add('Moo');
console.log(set3.size);
// 1
set4.add('Moo');
console.log(set4.size);
// 1

for (let entry of set2) {
  console.log(entry);
}
```

#### Asynchronous programming

Asynchronous programming is really important expecially on the client

```javascript
function doAsyncTask(cb) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 1000);
}

doAsyncTask(() => console.log("Callback Called")); // this will get called and then after one second the callback will be triggered

let error = false;
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
}

doAsyncTask().then(
  (val) => console.log(val), // this is the resolve function
  (err) => console.error(err) // this is the reject function
);

// Immediately Resolved Promise
let promise = Promise.resolve('done');
promise.then((val) => console.log(val)); // 'done'

// Handling Errors and chaining Promises
Promise.resolve('done')
  .then((val) => {throw new Error("fail")})
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
```


