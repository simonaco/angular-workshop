#### ES6 introduces classes

Plain ES6 classes using ES6

```javascript
class Person {
  firstName = "";
  lastName = "";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

// This is the way ES6 classes are extended
class Student extends Person {
  course;

  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}
```

#### Typescript brings in private access modifiers and interfaces

```javascript
interface Human {
  firstName: string;
  lastName: string;
  // optional contracts for the interface
  name?: Function;
  isLate?(time: Date): Function;
}

class Person {
  private firstName = "";
  private lastName = "";

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  test() {
    console.log(this.firstName); // an error
  }
}
```
