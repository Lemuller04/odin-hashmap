# HashMap Project

A simple HashMap implementation in JavaScript for learning data structures and collision handling. Built as part of The Odin Project to understand hashing, load factors, dynamic resizing, and separate chaining with linked lists.

## Features

- Hashing with collision handling
- Uses a prime-based hash function.
- Handles collisions with separate chaining using a custom LinkedList.
- Dynamic resizing
- Automatically doubles capacity when the load factor exceeds 0.75.

## Core methods implemented:

- set(key, value) – Adds or updates a key-value pair.
- get(key) – Retrieves the value for a given key.
- has(key) – Checks if a key exists.
- remove(key) – Removes a key-value pair.
- length() – Returns the current number of stored key-value pairs.
- clear() – Clears all entries.
- keys() – Returns all keys as an array.
- values() – Returns all values as an array.
- entries() – Returns key-value pairs as an array of arrays.

## Usage

``` JavaScript
import { HashMap } from "./hashmap.js";

const map = HashMap();

map.set("apple", "fruit");
map.set("carrot", "vegetable");
map.set("banana", "fruit");

console.log(map.get("carrot")); // "vegetable"
console.log(map.has("apple"));  // true

map.remove("banana");

console.log(map.length()); // 2

console.log(map.keys());   // ["apple", "carrot"]
console.log(map.values()); // ["fruit", "vegetable"]
console.log(map.entries()); // [["apple", "fruit"], ["carrot", "vegetable"]]

map.clear();
console.log(map.length()); // 0
```
