import { LinkedList } from "./linkedlist.js";

const HashMap = () => {
  let capacity = 16;
  let loadFactor = 0.75;
  let buckets = new Array(16);

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const hashCode = hash(key);
    let bucket = buckets[hashCode];

    if (bucket) {
      for (let i = 0; i < bucket.size(); i++) {
        if (bucket.at(i).value.key === key) {
          bucket.at(i).value.value = value;
          return;
        }
      }
      bucket.append({ key, value });
      return;
    }

    bucket = LinkedList();
    bucket.append({ key, value });
    buckets[hashCode] = bucket;

    if (length() > capacity * loadFactor) doubleSize();
  }

  function get(key) {
    const listNode = findNode(key);

    return listNode ? listNode.node.value.value : null;
  }

  function has(key) {
    const listNode = findNode(key);

    return listNode ? true : false;
  }

  function remove(key) {
    const listNode = findNode(key);
    if (!listNode) return false;

    listNode.bucket.removeAt(listNode.index);
    return true;
  }

  function length() {
    let counter = 0;
    for (let bucket of buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          counter++;
        }
      }
    }
    return counter;
  }

  function clear() {
    buckets = new Array(16);
    capacity = 16;
  }

  function keys() {
    const keys = [];
    for (let bucket of buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          keys.push(bucket.at(i).value.key);
        }
      }
    }
    return keys;
  }

  function values() {
    const values = [];
    for (let bucket of buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          values.push(bucket.at(i).value.value);
        }
      }
    }
    return values;
  }

  function entries() {
    const entriesArray = [];
    for (let bucket of buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          let entrie = bucket.at(i);
          entriesArray.push([entrie.value.key, entrie.value.value]);
        }
      }
    }
    return entriesArray;
  }

  function doubleSize() {
    const entriesToRehash = [];
    for (let bucket of buckets) {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          const { key, value } = bucket.at(i).value;
          entriesToRehash.push([key, value]);
        }
      }
    }

    capacity *= 2;
    buckets = new Array(capacity);

    entriesToRehash.forEach(([key, value]) => set(key, value));
  }

  function findNode(key) {
    const hashCode = hash(key);
    const bucket = buckets[hashCode];
    if (!bucket) return null;

    for (let i = 0; i < bucket.size(); i++) {
      const node = bucket.at(i);
      if (node.value.key === key) return { bucket, index: i, node };
    }

    return null;
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};

export { HashMap };
