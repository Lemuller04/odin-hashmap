const Node = (value = null) => {
  return {
    value,
    nextNode: null,
  };
};

const LinkedList = () => {
  let listHead = null;
  let listTail = null;
  let listSize = 0;

  function append(value) {
    let newNode = Node(value);

    if (listTail) listTail.nextNode = newNode;

    listHead = listHead ? listHead : newNode;
    listTail = newNode;
    listSize++;
  }

  function prepend(value) {
    let newNode = Node(value);

    if (listHead) {
      newNode.nextNode = listHead;
    }

    listHead = newNode;

    if (!listTail) listTail = newNode;
    listSize++;
  }

  function size() {
    return listSize;
  }

  function head() {
    return listHead;
  }

  function tail() {
    return listTail;
  }

  function at(index) {
    let current = listHead;

    for (let i = 0; i < listSize; i++) {
      if (i === index) return current;
      current = current.nextNode;
    }

    return null;
  }

  function pop() {
    if (listSize < 1) return;

    if (listSize === 1) {
      listHead = null;
      listTail = null;
      listSize = 0;
      return;
    }

    listTail = at(listSize - 2);
    listTail.nextNode = null;
    listSize--;
  }

  function contains(value) {
    let current = listHead;

    for (let i = 0; i < listSize; i++) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  function find(value) {
    let current = listHead;

    for (let i = 0; i < listSize; i++) {
      if (current.value === value) return i;
      current = current.nextNode;
    }

    return null;
  }

  function toString() {
    let current = listHead;
    let str = "";

    for (let i = 0; i < listSize; i++) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return str.slice(0, -4);
  }

  function insertAt(value, index) {
    if (index > listSize) {
      console.log(
        "ATTENTION: index out of bounds. Value has been appended to the list",
      );
      append(value);
      return;
    }

    if (index < 0) {
      console.log(
        "ATTENTION: index is less than zero. Value has been prepended to the list",
      );
      prepend(value);
      return;
    }

    if (index === 0) {
      prepend(value);
      return;
    }

    let newNode = Node(value);
    newNode.nextNode = at(index);

    at(index - 1).nextNode = newNode;
    listSize++;
  }

  function removeAt(index) {
    if (listSize === 0) {
      console.log(
        "ATTENTION: list is empty. Nothing has been removed from the list",
      );
      return;
    }

    if (index >= listSize || index < 0) {
      console.log(
        "ATTENTION: index out of bounds. Nothing has been removed from the list",
      );
      return;
    }

    if (listSize === 1) {
      listHead = null;
      listTail = null;
      listSize = 0;
      return;
    }

    if (index === 0) {
      listHead = at(1);
      listSize--;
      return;
    }

    if (index === listSize - 1) {
      pop();
      return;
    }

    at(index - 1).nextNode = at(index + 1);

    listSize--;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export { LinkedList };
