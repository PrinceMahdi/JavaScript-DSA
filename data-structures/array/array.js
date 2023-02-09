// Initialize an array - Version 1
const names = ["Jack", "Mary", "John", "Bianca"];

console.log(names[0]); // Jack
console.log(names[names.length - 1]); // Bianca

// Initialize an array - Version 2
const namesV2 = new Array("Jack", "Mary", "John", "Bianca");

// Loop through an array - Version 1
for (const name of names) {
  console.log(name);
}

// Loop through an array - Version 2
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Loop through an array - Version 3
names.forEach((name) => console.log(name));

// Adding to the end of an array
names.push("Sarah");
console.log(names); // [ 'Jack', 'Mary', 'John', 'Bianca', 'Sarah' ]

// Adding to the beginning of an array
names.unshift("Jerry");
console.log(names); // [ 'Jerry', 'Jack', 'Mary', 'John', 'Bianca', 'Sarah' ]

// Find the index of an element in an array
const mary = names.findIndex((name) => name === "Mary");
console.log(mary); // 2

// Trying to find the index of an element that doesn't exist in the array always returns -1
const jeffrey = names.findIndex((name) => name === "jeffrey");
console.log(jeffrey); // -1

// Modifying an array to remove certain elements
// const names = [ 'Jerry', 'Jack', 'Mary', 'John', 'Bianca', 'Sarah' ]

names.splice(2, 2); // Removes 2 elements from the array starting at index 2
console.log(names); // [ 'Jerry', 'Jack', 'Bianca', 'Sarah' ]

// Modifying an array to add certain elements
names.splice(2, 0, "hello", "world");
console.log(names); // [ 'Jerry', 'Jack', 'hello', 'world', 'Bianca', 'Sarah' ]

// Modifying an array to replace certain elements
names.splice(2, 2, "foo", "bar");
console.log(names); // [ 'Jerry', 'Jack', 'foo', 'bar', 'Bianca', 'Sarah' ]

// To remove an an element from the end of an array
names.pop();
console.log(names); // [ 'Jerry', 'Jack', 'foo', 'bar', 'Bianca' ]

// To check whether an element exists in the array
console.log(names.includes("Mary")); // false
console.log(names.includes("Jack")); // true

// To return a shallow copy of a portion of an array
console.log(names.slice(2)); // Returns everything from index 2 onward | [ 'foo', 'bar', 'Bianca' ]

// Joining elements of an array
console.log(names.join()); // Jerry,Jack,foo,bar,Bianca
console.log(names.join("")); // JerryJackfoobarBianca
console.log(names.join(" ")); // Jerry Jack foo bar Bianca
console.log(names.join("-")); // Jerry-Jack-foo-bar-Bianca

// To check whether all elements of an array pass a given condition
const numbers = [20, 1, 93, 4, 8, 12];

console.log(numbers.every((number) => number < 100)); // true

// To filter the elements of an array
console.log(numbers.filter((number) => number < 10)); // [ 1, 4, 8 ]

// To sort an array
numbers.sort((a, b) => a - b); // Ascending order | [ 1, 4, 8, 12, 20, 93 ]
console.log(numbers);

numbers.sort((a, b) => b - a); // Descending order  | [ 93, 20, 12, 8, 4, 1 ]
console.log(numbers);

// Find the first element that satisfies a criteria
const under30 = numbers.find((number) => number < 30);
console.log(under30); // 20

// Check if at least one element in the array satisfies a criteria
const over1000 = numbers.some((number) => number > 1000);
console.log(over1000); // false

// To modify an array by iterating through it and creating a new array
const newNumbersArray = numbers.map((number) => number * 2);
console.log(newNumbersArray); // [ 186, 40, 24, 16, 8, 2 ]

// To provide a single value by iteratively applying a function to the elements of an array
const sum = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => {
  // adds every single element of that array together and provides a sum
  return accumulator + currentValue;
});
console.log(sum); // 15
