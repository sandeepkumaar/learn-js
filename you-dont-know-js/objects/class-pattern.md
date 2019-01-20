## Summary



class pattern
what classes can offer
  - encapsulation
  - code reuse

polymorphism






> Program to an interface, not an implementation

> Favour object composition over class inheritance

Typically, code reuse in objects are acheived through
class inheritance. But this has proved to have shortcomings

Ref:

#### Tight coupling
Inheritance is the tightest coupling available in OO design.
Descendant classes have an intimate knowledge of their ancestor classes.

#### Inflexible Heirachies
Single-parent hierarchies are rarely capable of describing all possible use cases.
Eventually, all hierarchies are “wrong” for new uses—a problem that necessitates
code duplication.


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


#### Duplication by necessacity
Due to inflexible hierarchies and the gorilla/banana problem, code reuse is often accomplished by copy/paste, violating DRY (Don’t Repeat Yourself) and defeating the entire purpose of inheritance in the first place.




class limitation


design patterns to overcome class limitations
- strategy pattern
