## Number
Js uses `number` type to represent Integers, Octal, Hex, Floating points
```
Constructor
let n = Number(5); // 5
Number(null|''|undefined, false); // 0
Number(true) // 1
Number('asdf'); // NaN
```

### Integers
```
let num = 100;
```
### Octal
Octal numbers are preceded by `0o`
```
let octal = 0o71 // 57
```
### Hex
Hex number preceded by `0x`
```
let num = 0x1a;
console.log(num); // 26
```
## Binary
Binary number is preceded by `0b`
```
let f = 0b111;
console.log(f); // 7
```

> Note: Hex and Octal numbers can be used to solve mathematical specific problems. Will update if there is any case

### Floating points
Any number with decimal point and atleast a number after that is treated as Floating points in js.
```
let float = 10.783
let p10 = 3.14e7 // 3.14*10^7 
let p-10 = 3.14e-7 // 3.14*10^-7
```
JS represents possible powers of 10s as in E-Notation
```
let amount = 0.0000005;
console.log(amount);
```

### Big Int (ES2022)
`bigint` type stores values greater than 2^53-1
```
let pageView = 9007199254740991n;
```
`n` at the end tells js that it is a bigint type which allocates memory respectively
without `n`, js interprets it as number and it may not be performant

## Numeric Separators
JS allows numbers to be seperated by `_` for readability. Separator can separate between any order.
```
const budget = 1_000_00_0000;
```
Although, this is only for readability and representation. JS interpretst the value as normal number without separators in console or when passed as input.
