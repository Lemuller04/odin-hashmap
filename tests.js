if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { HashMap } = await import("./hashmap.js");

  // Write tests below:

  const test = HashMap();

  test.set("apple", "red");
  test.set("banana", "yellow");
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");
  test.set("frog", "green");
  test.set("grape", "purple");
  test.set("hat", "black");
  test.set("ice cream", "white");
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");

  console.log(test.length());
  console.log(test.get("kite"));
  console.log(test.has("kite"));
  test.remove("kite");
  console.log(test.length());
  console.log(test.get("kite"));
  console.log(test.has("kite"));
  test.clear();
  console.log(test.length());
};

run();
