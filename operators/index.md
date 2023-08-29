## Arithmetic  (+, -, * , /)
Except for `+` all other operators converts the operand to Number and perform operation. 
If the operand cannot be converted to Number type, `NaN` is returned


## Remainder  %


## Assignment =


## Unary 
- +x  : convert to Number 
- -x  : convert to Numner and negate
- ++x : add value
- --x  : subract value
- x++
- x--

## Comparison 
Operands are converted to **number** type to compare


## Logical 
Operands are converted to **boolean** type for operation


## Nullish Coalescing
Applied only for null, undefined. to distinguish from other falsy values 0, '', false

```
null ?? '' // ''
undefined ?? '' // ''
```


## Exponential Operator
```
Math.pow(base, exponent);
// or as literal
2**3 // 8
(-2)**3 // -8 (brackets are required)
```
