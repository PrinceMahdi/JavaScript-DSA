// Initializing a set
const ids = new Set();

// Adding new values to the set
ids.add("1");
ids.add("2");
ids.add("1");
ids.add("2");

// Looping through a set - Version 1
for (const id of ids) {
  console.log(id);
  //   1
  //   bb2;
}

// Looping through a set - Version 2
ids.forEach((id) => console.log(id));

// Loop through the keys and values of a set
for (let [key, value] of ids.entries()) {
  console.log(`${key} ${value}`);
  /*
    1 1
    2 2
  */
}

// Check whether a value exists in a set
console.log(ids.has("1")); // true
console.log(ids.has(1)); // false

// how to get rid of an element in a set
ids.delete("1");
console.log(ids); // Set(1) { '2' }

// How to remove duplicates from an array using a set
const names = ["Jack", "Mary", "John", "Bianca", "Jack", "John", "John"];
const updatedNames = new Set(names);

console.log(updatedNames); // Set(4) { 'Jack', 'Mary', 'John', 'Bianca' }

// Check the length of a set
console.log(updatedNames.size); // 4

// How to clear a set
updatedNames.clear();
console.log(updatedNames); // Set(0) {}
