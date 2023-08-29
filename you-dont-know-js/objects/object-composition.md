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
