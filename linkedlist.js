class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //create a new node, point head to that new node
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newNodeValue, itemToInsertBefore){
         // If the list is empty
         if (!this.head) {
            this.insertFirst(newNodeValue);
         }

        // Start at the head and keep track of the positions
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== itemToInsertBefore)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let NewNode = new _Node(newNodeValue, previousNode.next);
        previousNode.next = NewNode;
    }

    insertAfter(newNodeValue, itemToInsertAfter){
        // If the list is empty
        if (!this.head) {
           this.insertFirst(newNodeValue);
        }

       // Start at the head and keep track of the positions
       let currNode = this.head;
      
       while ((currNode !== null) && (currNode.value !== itemToInsertAfter)) {
           // Traversing
           currNode = currNode.next;
       }
       if (currNode === null) {
           console.log('Item not found');
           return;
       }

       let NewNode = new _Node(newNodeValue, currNode.next);
       currNode.next = NewNode;
   }

   insertAt(newNodeValue, placeToInsert){
    // If the list is empty
    if (!this.head) {
       this.insertFirst(newNodeValue);
    }

   // Start at the head and keep track of the positions
   let currNode = this.head;
   // Keep track of previous
   let previousNode = this.head;
   let count = 1
   while ((currNode !== null) && (count != placeToInsert)) {
       // Save the previous node 
       previousNode = currNode;
       currNode = currNode.next;
       count++;
   }
   if (currNode === null) {
       console.log('Item not found');
       return;
   }

   let NewNode = new _Node(newNodeValue, previousNode.next);
   previousNode.next = NewNode;
}

}

module.exports= LinkedList ;