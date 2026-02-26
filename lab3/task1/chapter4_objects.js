'use strict';

// Object creation
let user = {
  name: 'John',
  age: 30
};

// Access properties
console.log(user.name);
console.log(user.age);

// Modify object
user.isAdmin = true;
delete user.age;

console.log(user);