#### Typescript specific features

Decorators for adding specific functionality to objects
```javascript
function Student(config) {
  return function (target) {
    Object.defineProperty(target.prototype, 'course', {value: () => config.course})
  }
}



@Student({
  course: 'angular6'
})
class Person {
  constructor(private firstName, private lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

let rick = new Person('Rick', 'Sanchez');
console.log(rick.course());
```
