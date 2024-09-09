/**
 * Linked Lists implementation in JavaScript
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the end of the list
    append(element) {
        const newNode = new Node(element);
        
        if(this.head === null) {
            this.head = newNode;    
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Insert a new node at the beginning of the list
    prepend(element) {
        const newNode = new Node(element);
        newNode.next = this.head;
        this.head = newNode;
    }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();