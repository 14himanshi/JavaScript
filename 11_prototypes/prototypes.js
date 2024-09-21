/*

Javascript's default behaviour is prototypal in nature
prototype behavious ke wajah se hi hume 'new' 'this' keywords use case mila and classes ka use case mila

Imagine the prototype chain in JavaScript as a family tree, where properties and methods (functions) are inherited from one "ancestor" to the next. If an object doesn’t have a certain property, JavaScript looks to the object’s parent (or prototype) and continues searching up the chain until it either finds the property or runs out of objects to look through.

Real-World Example: Family Tree
Let’s say you have a family with Grandparent, Parent, and Child. They share some common behaviors, like "walking," but some members of the family have unique behaviors, like "driving" or "coding."

Grandparent: Can walk.
Parent: Can walk, and also drive.
Child: Can walk, drive, and also code.

In JavaScript:
The Child object looks for the ability to code. Since the child knows how to code, it doesn't need to look any further.
The Child object looks for the ability to drive. If the child can’t drive, it looks at the Parent object for that ability.
The Child object looks for the ability to walk. If it can't find it on the Child or Parent object, it checks Grandparent.

*/