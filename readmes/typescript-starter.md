# Typescript starter

### Transpilation

Since browsers don’t know about TypeScript we need to convert our TypeScript code into something they do understand.
The current version of JavaScript with the broadest support across all browsers is still ES5, so that’s what we currently convert our TypeScript code into.
The process of converting TypeScript into ES5 is called transpilation and we use a tool called tsc to compile on the command line.

#### Steps

* Install typescript transpiler

```bash
npm install -g typescript

# test your install
tsc –v
```
* Create a `hello.ts` file

* Transpile your code
```bash
# with default options
tsc hello.ts

# you can also watch a file for changes
tsc -w hello.ts

# what about configuring transpile code outputs
tsc -t ES6 -w hello.ts

# and create a folder config
tsc --init

# and wtch the entire folder
tsc -w
```
