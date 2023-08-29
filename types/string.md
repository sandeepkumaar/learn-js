## String
```
let single = 'sandeep';
let double = "sandeep";
let ticks = `sandeep`;
```

### Access and length
```
let str = 'sandeep'
str.length // 7
str[0] // s
```

## Conversion
We can convert any type to string type through `String()` function.
All types (primitive and complex) has a `toString` method implemented which returns a string represention.
Except `null` and `undefined` since it cannot have any methods

```
true.toString() // "true"
1.toString() // "1"
null.toString() // TypeError: Cannot read property
undefined.toString() // TypeError: Cannot read property
```


## Operators

### Addition +
when `+` is used, strings are concatenated. When string is an operand and operated with any type. it will be coalesced to string
```
'' + true // 'true'
'' + {]  // [object object]
{} + '' // 0?? 
```

### -| * | /  - NaN  -- Converted to Numbers

### Remainder  - NaN

### Comparison  -- Converted to Numbers
Comparison operator converts the string to the respect charCode value (number) and performs the operation
```
'a' < 'b' // true  // 97 < 98
'a' === 'A' // false 
```
> How to sort strings in asc/desc? 

### Logical Opertors (||, &&, !) - Converted to Boolean
- '' // false
- 'any' // true
