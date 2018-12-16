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


var queryByNameNavin = {
  queryBy: "name",
  value: "Navin"
};


var queryByAge26 = {
  queryBy: "age",
  value: "26"
};


var list_1 = studentList.filter(function(item) {
  return item[queryByNameNavin.queryBy] == queryByNameNavin.value
});
console.log(list_1)

var list_2 = studentList.filter(function(item) {
  return item[queryByAge26.queryBy] == queryByAge26.value
})
console.log(list_2)

// we have used a function(anonymous) for each query
// lets reuse the function

var predicate = function(item, context) {
  return item[context.queryBy] == context.value
}

studentList.filter()
