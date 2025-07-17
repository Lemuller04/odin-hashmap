if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { HashMap } = await import("./hashmap.js");

  // Write tests below:

  const map = HashMap();

  map.set("apple", "fruit");
  map.set("carrot", "vegetable");
  map.set("banana", "fruit");

  console.log(map.get("carrot")); // "vegetable"
  console.log(map.has("apple")); // true

  map.remove("banana");

  console.log(map.length()); // 2

  console.log(map.keys()); // ["apple", "carrot"]
  console.log(map.values()); // ["fruit", "vegetable"]
  console.log(map.entries()); // [["apple", "fruit"], ["carrot", "vegetable"]]

  map.clear();
  console.log(map.length()); // 0
};

run();
