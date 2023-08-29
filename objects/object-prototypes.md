## Summary

Unlike Java, where everything is *class*. In JS everything is objects.
Class is the building block. Object is the building block.


> A prototype is an **early sample**, model, or release of a product built to test a concept or process or to act as **a thing to be replicated** or **learned from** - Wiki

To note:
- early sample        // doesn't do much, but has all features(props,behaviours)
- replicated          // copied for other products
- learned from        // acts as reference, and may replace some parts for our product specifics

Ref : https://en.wikipedia.org/wiki/Prototype#Computer_programming/computer_science

>Prototype-based programming is a style of **object-oriented programming** in which **behaviour reuse** (*known as inheritance*) is performed via a process of *reusing existing objects* via **delegation** that serve as **prototypes**.

>This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming. *Delegation* is the language feature that supports prototype-based programming.

https://en.wikipedia.org/wiki/Prototype-based_programming

Objective of prototypes in programming language is
- act as a reference with basic features
- code reuse

> Unlike `class` which is a **blueprint**, `prototypes` are **instances/objects**


## Basic of prototypes
prototype is simply an object.

### Assigning a prototype
- constructor function //
- object composition  // preferred


#### Object composition
