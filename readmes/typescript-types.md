### We have multiple pretty familiar ways of defining types in typescript

```javascript
"use strict";

// Core
let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Function
let fun: Function = () => console.log("Hello");
function returnNumber(): number {
  return 1;
}

// Void
function returnNothing(): void {
  console.log("Moo");
}

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let go: Direction;
go = Direction.Up;


// Class
class Person {
}
let person: Person;
let people: Person[];

// Any
let notsure: any = 1;
notsure = "hello"; // This is fine since we don't do type checking with any

// Type Assertion
let value: any = 'Morty Smith';
let length: number = (<string>value).length;


// Generics
class Audio {
}
class Video {
}

class Post<T> {
  content: T;
}

let audioPost: Post<Audio>;
let videoPost: Post<Video>;
```

In third party libraries types are not always available.
To apply types we can use something called an ambient type definition.
Usually the type definitions are in files `<source>.d.ts`

```bash
npm install -g typings

# we can for example install the typings for jquery
typings install jquery --save --source dt --global
```
