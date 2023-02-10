// How to initialize a map
const resultData = new Map();

// How to add to a map
resultData.set("average", 1.53);
resultData.set("lastResult", null);

console.log(resultData); // Map(2) { 'average' => 1.53, 'lastResult' => null }

// Adding an object to a map
const germany = {
  name: "Germany",
  population: 93,
};

resultData.set(germany, 0.89);
console.log(resultData);
/*
Map(3) {
  'average' => 1.53,
  'lastResult' => null,
  { name: 'Germany', population: 93 } => undefined
}
*/

// How to loop through a map
for (const el of resultData) {
  console.log(el);
  /*
  [ 'average', 1.53 ]
  [ 'lastResult', null ]
  [ { name: 'Germany', population: 93 }, 0.89 ]
  */
}

// How to retrieve a value by key
console.log(resultData.get("average")); // 1.53

// How to delete a value by key
resultData.delete(germany);
console.log(resultData); // Map(2) { 'average' => 1.53, 'lastResult' => null }
