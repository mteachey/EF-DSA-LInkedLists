const LinkedList = require('./linkedlist');

function main(){

    // Create an instance of the LinkedList class
    let SLL = new LinkedList()

     SLL.insertFirst('Apollo');
     SLL.insertLast('Boomer');
     SLL.insertLast('Helo');
 //   SLL.insertLast('Husker');
  //  SLL.insertLast('Starbuck');
  //  SLL.insertLast('Tauhida');
    //SLL.remove('Husker');
    //SLL.insertBefore('Athena','Boomer')
   // SLL.insertAfter('Hotdog','Helo')
   // SLL.insertAt('Kat',3);

    //console.log(`this is the SLL ${SLL.head.next}`);
    return SLL;
}

let listToDisplay = main();

function displayList(list){

    let currNode = list.head;

    let listArray = [];
    let foundEnd = false;
    while (!foundEnd) {
        // Save the previous node 
        listArray.push(currNode.value)
        currNode = currNode.next;
        if(currNode.next === null){
            listArray.push(currNode.value)
            foundEnd = true;
        }
    }
    return listArray;
}

console.log(`display`);
console.log(displayList(listToDisplay));
/*****end disaply function ***************/

function findSize(list){
 
    let currNode = list.head;

    let count = 0;
    let foundEnd = false;

    //if empty list return 0
    if (!currNode) {
        foundEnd = true;
    }

    while (!foundEnd) {
        // Save the previous node 
        count++;
        currNode = currNode.next;
        if(currNode.next === null){
            count++
            foundEnd = true;
        }
    }
    return count;
}

function findLast(list){
    let currNode = list.head;

    let foundEnd = false;

    //if empty list return 0
    if (!currNode) {
        foundEnd = true;
    }

    while (!foundEnd) {
        // Save the previous node 
        currNode = currNode.next;
        if(currNode.next === null){
            foundEnd = true;
        }
    }
    return currNode.value;
}

function isEmpty(list){
    let currNode = list.head;

    //if empty list return empty
    if (!currNode) {
        return 'empty'
    }

    else {return 'list has items'}
}

function findPrevious(list,nodeinFront){
    
   // Start at the head and keep track of the positions
    let currNode = list.head;
    // Keep track of previous
        let previousNode = list.head;
    //if empty list return empty
    if (!currNode) {
        return 'empty'
    }
    while ((currNode !== null) && (currNode.value !== nodeinFront)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }

    let previousNodeValue = previousNode.value;
    return previousNodeValue;

}

function reverseList(list){
     if(isEmpty(list)==='empty'){
      console.log('list is empty');
      return;
    }
    let nextNode = list.head.next;
    let nextNextNode;
    let currentNode = list.head;
    currentNode.next = null;
    while(nextNode !== null){
      nextNextNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = nextNextNode;
    }
    list.head = currentNode;

    return list;
  }


console.log(reverseList(listToDisplay));





/***********mystery function*******/
//Mystery Program
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//doesn't seem to really do anything - there is not reutrn statement so it just traverses the list.

