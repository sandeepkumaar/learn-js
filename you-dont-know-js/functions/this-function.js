/**
 * Aim
 * To query the list based on the conditions
 * condition can be treated as context
 */

var studentList = [{
  name: "sandeep",
  age: 26
},{
  name: "Navin",
  age: 24,
},{
  name: "Navin",
  age: 28,
}];


// contexts
var queryByNameNavin = {
  queryBy: "name",
  value: "Navin"
};


var queryByAge26 = {
  queryBy: "age",
  value: "26"
};

/**
 * Approach #1 Usual approach
 * conditions are available in the scope
 * a function for each condition
 */
var list_1 = studentList.filter(function(item) {
  return item[queryByNameNavin.queryBy] == queryByNameNavin.value
});
console.log(list_1)

var list_2 = studentList.filter(function(item) {
  return item[queryByAge26.queryBy] == queryByAge26.value
})
console.log(list_2)

/**
 * Approach #2 Reuse functions for different conditions
 * condition is treated as context
 */

// context passed as argument
// this is not possible since filter does not take it
var predicate = function(item, context) {
  return item[context.queryBy] == context.value
}

studentList.filter() // filter takes a predicate only with index

// let modify the predicate
var predicate = function(item) {
  return item[this.queryBy] == this.value
}

// bind the predicate with diffrent context
var namePredicate = predicate.bind(queryByNameNavin);
var agePredicate = predicate.bind(queryByAge26);


studentList.filter(namePredicate)
studentList.filter(agePredicate)


/**
 * Approach #3 array higher-order functions takes a context arg
 * You need not bind the predicate explicitly.
 * filter function will do it for u
 * But this approach expects the context to be in the same scope
 */

studentList.filter(predicate, queryByNameNavin)
studentList.filter(predicate, queryByAge26)



/**
 * Replacing lambda with arrow functions
 */

 var predicate = (item) => {
   return item[this.queryBy] == this.value
 }

studentList.filter(predicate, queryByNameNavin) // returns all
studentList.filter(predicate, queryByAge26)     // returns all

// like anticipated, arrow functions don't have its own `this`
