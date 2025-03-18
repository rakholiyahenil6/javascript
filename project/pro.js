//1.wap for reverse link list.
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

function displayList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
        result += current.value + " -> ";
        current = current.next;
    }
    console.log(result + "null");
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log("Original Linked List:");
displayList(head);

head = reverseList(head);

console.log("Reversed Linked List:");
displayList(head);

//2. wap for given link list is palindrome or not.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    isPalindrome() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        return values.join('') === values.reverse().join('');
    }
}

const list = new LinkedList();
[1, 2, 3, 2, 1].forEach(value => list.append(value));

console.log("Is palindrome:", list.isPalindrome());

//3. wap for removing node element at any  position in given link list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
    }

    remove(position) {
        if (position < 1 || !this.head) return console.log("Invalid position.");
        if (position === 1) return this.head = this.head.next;
        let current = this.head, prev = null, count = 1;
        while (current && count < position) {
            prev = current;
            current = current.next;
            count++;
        }
        if (!current) return console.log("Position does not exist.");
        prev.next = current.next;
    }

    print() {
        let result = "", current = this.head;
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "NULL");
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Original List:");
list.print();

list.remove(2);

console.log("List after removing node at position 2:");
list.print();
