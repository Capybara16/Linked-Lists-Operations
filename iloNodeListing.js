// Create a class for a Node
class Node {
    constructor(value) {
        this.value = value; // Set the value of the node
        this.next = null;   // Next node initially points to null
    }
}

// Create a class for LinkedList
class LinkedList {
    constructor() {
        this.head = null;   // Initialize the head to null
        this.size = 0;      // Start with size 0
    }

    // Function to append new items to the linked list
    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            // If the list is empty, set the head to the new node
            this.head = newNode;
        } else {
            // Traverse to the end of the list and append the new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++; // Increment the size
        this.print(); // Print the list whenever a node is added
    }

    // Function to print the current state of the linked list
    print() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log("LinkedList:", values.join(" -> "));
    }
}

// Program usage
const list = new LinkedList();

// Append the required items
list.append("Data Structures – Array");
list.append("Variable Type – Integer");
list.append("Sorting Algorithm – Bubble Sort");
