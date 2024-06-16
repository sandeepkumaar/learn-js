/**
 * Proxy act as middle layer through which the target(object, function) is interacted.
 * Ie. Any interaction with Target goes through proxy. 
 * And Proxy can intercept and send whatever it needs
 * In cases where proxy needs to use the Target's default behaviour, it can use Reflect API to safely 
 * implement the Targets behaviour
*/

let person = {
  name: 'sk',
  age: 24
};
/**
 * handler is an object which has traps. 
 * traps are nothing but functions which allows us to intecept Target for various actions
 * Eg: get, set, has(): in operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods
*/
let proxyPerson = new Proxy(person, {
  get: function(target, property){
    if(property ==='name') {
      //return target[property].toUpperCase();
      let value = Reflect.get(target, property)
      return value.toUpperCase()
      // or in shortcut
      //return Reflect.get(...arguments).toUpperCase();
    };
    //return target[property]; 
    // instead of implementing default Target behaviour, we use the Reflect api to follow.
    // since proxy's traps and reflect's api are same. we can follow the below syntax for all default impl case.
    return Reflect.get(...arguments);
  },
  set: function(target, property, value){
    if(property === 'age') {
       return Reflect.set(target, property, value + 10);
    };
    // return target[property] = value;
    return Reflect.set(...arguments);
  },
  has:function(target, property) {
    if(propery === 'city') {
      return true;
    }
    // return property in target
    return Reflect.has(...arguments);
  }
})


