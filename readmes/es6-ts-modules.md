### Modules have changed a little bit since ES5

We need to create a separate module to import
```javascript
// utils.ts
function square(x) {
    return Math.pow(x,2)
}

function cow() {
    console.log("Mooooo!!!")
}

export {square, cow};
```

We should also start importing the modules
```javascript
import { cow } from './utils'; // basic import
import { square as sqr } from './utils'; // aliases

sqr(2);

cow();
```
