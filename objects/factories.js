/**
 * Factories abstracts the implementation details of object creation
 * Factories do object composition. Composition can be 
 * delegation - prototype inheritance
 * aggregation - Array, Set, Map
 * concatenation - Object.assign
 *
 * Factory objects are immutable and should not be extended or modified.
*/
const proto = {
  toString: function() {
    return ``;
  },
  copy: function() {
  },
}

/**
 * Factory
*/
const createPerson  = function(name, age, city) {
  // TODO validator
  
  const o = {
    name, 
    age, 
    getCity: function() {
      return city.toUpperCase();
    }
  };

  return Object.freeze(Object.assign(Object.create(proto), o));
}
