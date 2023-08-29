## Summary

### class basics
Classes are blueprints. Blueprints are written statically.
Objects are created from *copying*/instantiating blueprints


### class pattern
what classes can offer
  - encapsulation
  - code reuse

#### Encapsulation
Hiding the implementation details and exposing methods (interface).
This facilitates polymorphism, through common interface

See: Interface, Polymorphism in programming-language


#### Code reuse
Polymorphism simply provides a common interface, that other (any)objects/entities can
program to. The implementations are specific, and are not *naturally reused*

Inheritance (implementation inheritance) promotes code reuse. Child objects can
inherit the implementations of the common parent

In Class Pattern, simplest code-reuse is thru implementation inheritance

##### Note
When instantiating a Child Class inheriting Parent behaviour,
it means the child is merely given a **copy** of the inherited
behaviour from its parent.
If the child *overrides* a method it inherits, both the *original
and overridden* versions of the methods are actually **maintained**,
so that they are both accessible. (at different levels)

This is basically because, the child should not modify the parents properties.


##### Note
Class pattern allows programmers to play with Classes rather than objects.
What we really need is to play with objects. after all its the objects that
does the job.



### Class pattern shortcomings
> Program to an interface, not an implementation

> Favour object composition over class inheritance

Typically, code reuse in objects are achieved through
class inheritance. But this has proved to have shortcomings

Ref:

#### Tight coupling
Inheritance(implementation) is the tightest coupling available in OO design.
Descendant classes have an intimate knowledge of their ancestor classes.

#### Inflexible Hierarchies
Single-parent hierarchies are rarely capable of describing all possible use cases.
Eventually, all hierarchies are “wrong” for new uses—a problem that necessitates
code duplication.
Eg: Sometimes u might create a similar class hierarchy just because the existing
hierarchy couldn't fit or modified.


#### Multiple inheritance is complicated
It’s often desirable to inherit from more than one parent. That process is inordin‐
ately complex, and its implementation is inconsistent with the process for single
inheritance, which makes it harder to read and understand.

#### Brittle architecture
With tight coupling, it’s often difficult to refactor a class with the “wrong” design,because much existing functionality depends on the existing design.

#### Gorilla/Banana problem
There are often parts of the parent that you don’t want to inherit.
Subclassing allows you to override properties from the parent,
but it doesn’t allow you to select which properties you want to inherit.
Eg: Class means copies

#### Duplication by necessity
Due to inflexible hierarchies and the gorilla/banana problem, code reuse is often accomplished by copy/paste, violating DRY (Don’t Repeat Yourself) and defeating the entire purpose of inheritance in the first place.
Eg: Class means copies.
