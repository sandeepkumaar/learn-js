aggregation
concatenation/extension
delegation


factories

functional mixin // object mixin


## What is Object composition
composing objects to get complex behaviour


## Object composition is a form of Code reuse

Code reuse through Abstraction

Abstraction
- Generalization : Extracting only the shared properties and behaviours
- Specialization : process of *providing* implementations // factory??


When we talk about Object composition what should be noted is the
*what kind of relationship* that each objects has with each other


Relationship being
- how are they composed: parent child, holding reference, mixing with them
- how much degree of coupling between them



GOF says, favour object composition over inheritance for getting complex behaviours
They also say that objects are small, loosely coupled, easier compose
Where changing one object will not affect other


## Different forms of composition / Compositional relationships

Note: GOF introduced
- aggregation
- delegation
both are emerged with java in head

JS has another compositional technique. *dynamic object extension* aka Concatenation (mixing)


### Aggregation
Aggregation is when an object is formed from an enumerable collection of subobjects

multiple objects (may be of different types) are *aggregated* for a process/operation to be performed
on all of them.
Eg: Arrays, Maps, Sets, Graphs, Trees, DOM nodes, UI components with child
```
let x = [1,2,3]

```
### Concatenation
Concatenation is when an object is formed by adding new properties to an *existing object*.

Eg: State reducers, functional mixins
forming json objects, immutable bigdata  
```
Object.assign()
```


### Delegation
Delegation is when an object forwards or delegates to another object.

A common instance shared by all othe objects and when updated the delegating objects are also updated

This is done throught prototype inheritance
```
let proto = {
  name: 'sandeeep'
}
let person = Object.assingn(Object.create(proto), { age: 24});

```

#### Composing through Factories
Generally Instances are created with constructor `new` 

creating instances via constructor is programming to implementation

Eg: 

```
// player proto is inherited
let human = new HumanPlayer();
let bot = new BotPlayer();
```
Instead put/encapsulate the implementations to an interface via Factories


```
let human = createPlayer('', type='human');
let bot = createPlayer('');
```
Inside the factory functions, object are created through the composition techniques like 
- object.assign
- object.create
- object.freeze



