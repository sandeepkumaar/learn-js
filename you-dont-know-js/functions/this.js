/**
 * student object with toUpperCase method
 *
 */
var student = {
  name: "sandeep",
  age: 26,
  toUpperCase: function toUpperCase() {
    return this.name.toUpperCase()
  }
};

var teacher = {
  name: "Navin",
  age: 23,
  toUpperCase: function toUpperCase() {
    return this.name.toUpperCase()
  }
}
student.toUpperCase() // "SANDEEP"
teacher.toUpperCase() // "SANDEEP"


/**
 * toUpperCase method acts like a util
 * meaning they are pure and don't mutate the state
 * But toUpperCase() should be reuesed
 */

function toUpperCase(context) {
   return context.name.toUpperCase()
}
function toUpperCase() {
   return this.name.toUpperCase()
}

var student = {
 name: "sandeep",
 age: 26,
};

var teacher = {
  name: "Navin",
  age: 23,
};

toUpperCase(student)
toUpperCase(teacher)
