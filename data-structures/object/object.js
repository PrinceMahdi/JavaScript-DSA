// Initialize an object - Version 1
const person = {
  firstName: "John",
  lastName: "Smith",
  age: "29",
  hobbies: ["Cooking", "Reading"],
  greet() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  },
};

// Initialize an object - Version 2
const personTwo = new Object();

console.log(person["firstName"]); // John
console.log(person.lastName); //  Smith

// Add a key/value pair to an object
person.favoriteLanguage = "JavaScript";
console.log(person.favoriteLanguage); // JavaScript

// Delete a key/value pair from an object
delete person.age;
console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Smith',
  hobbies: [ 'Cooking', 'Reading' ],
  favoriteLanguage: 'JavaScript'
}
*/

// Access a method in an object
person.greet(); // Hello, I'm John Smith

// How to loop through an object's keys and values - Version 1
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

// How to loop through an object's keys and values - Version 2
Object.entries(person).forEach((entry) => {
  const [key, value] = entry;
  console.log(`${key}: ${value}`);
});

// How to loop through an object's keys
Object.keys(person).forEach((property) => {
  console.log(`${property}`);
});

// How to loop through an object's values
Object.values(person).forEach((value) => {
  console.log(`${value}`);
});

// Check if an object has a specific key
console.log(Object.hasOwn(person, "firstName")); // true
console.log(Object.hasOwn(person, "middleName")); // false

// To permanently prevent an object from future modifications
Object.freeze(person);

// To check if an object is frozen
console.log(Object.isFrozen(person)); // true

// Checking to see if we can modify the object after freezing it
person.favoriteColor = "red";
console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Smith',
  hobbies: [ 'Cooking', 'Reading' ],
  greet: [Function: greet],
  favoriteLanguage: 'JavaScript'
}
*/
