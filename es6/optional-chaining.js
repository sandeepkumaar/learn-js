/**
 * Optional chaining and null coalescing
 * Optional Chaining when propery access on null or undefined, returns undefined (only)
 * nullish ?? is equivalent to || except, || includes other falsy values like "", false, 0 which may be a real value
 * Prefer ?? over ||
*/
{
let x = {
  name: 'sandeep',
  age: null
};
x.name; // sandeep
x.address; // undefined
x.address?.city // undefined
x.age?.prop1.prop2.prop3 // undefined
x.age?.prop1.prop2.prop3 ?? 'defaultAge'// defaultAge
x.age?.prop1.prop2.prop3 || 'defaultAge'// defaultAge
}
/**
 *
*/
{

}

