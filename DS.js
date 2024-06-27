class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    if (head == null) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }

  printLinkedList(node) {
    if (this.isEmpty()) {
      return "Linked list is empty";
    }

    if (node.next == null) {
      console.log(node.data);
      return 0;
    } else {
      console.log(node.data);
      this.printLinkedList(node.next);
    }
  }

  insertToHead(value) {
    let node = new ListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  getLastElement() {
    if (this.isEmpty()) return "Linked list is empty";
    else return this.tail.data;
  }

  getFirstElement() {
    if (this.isEmpty()) return "linked list is empty";
    else return this.head.data;
  }

  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = -1;
    this.array = new Array();
  }

  push(value) {
    this.length++;
    this.array[this.length] = value;
  }
  pop() {
    let val = this.array[this.length];
    this.length--;
    return val;
  }
  printStack() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.array[i]);
    }
  }
}
//ex1
function reverse(array) {
  let stack = new Stack();
  let reverseArray = [];
  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    reverseArray.push(stack.pop());
  }
  return reverseArray;
}
console.log(reverse([1, 2, 3, 4, 5]));

//ex2

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack1.length == -1) {
      console.log("queue is empty");
    } else {
      for (let i = 0; i <= this.stack1.length + 1; i++) {
        this.stack2.push(this.stack1.pop());
      }

      let val = this.stack2.pop();
      for (let i = 0; i <= this.stack2.length; i++) {
        this.stack1.push(this.stack2.pop());
      }
      return val;
    }
  }
  printQueue() {
    this.stack1.printStack();
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);

console.log(queue.dequeue());

//ex3

function sum(num, arr) {
  if (num <= 0) {
    return 0;
  } else {
    return sum(num - 1, arr) + arr[num - 1];
  }
}
let arr = [1, 2, 3, 4, 5];
console.log(sum(arr.length, arr));

//ex4
let list = new LinkedList();

list.insertToHead(1);
list.insertToHead(2);
list.insertToHead(3);
list.insertToHead(4);
list.insertToHead(5);

function reverseLinkedList(list) {
  let stack = new Stack();
  let pointer = list.head;
  let reverseList = new LinkedList();
  while (pointer.next != null) {
    stack.push(pointer.data);
    pointer = pointer.next;
  }

  for (let i = 0; i <= stack.length + 1; i++) {
    reverseList.insertToHead(stack.pop());
  }
  return reverseList;
}

let reverseList = reverseLinkedList(list);

reverseList.printLinkedList(reverseList.head);
