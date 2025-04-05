//1wap to implement insert,viwe and delete operations in array using javascript without any function.
// Initialize an array with fixed size
let size = 10;
let arr = new Array(size);
let n = 0; //  number of elements in the array

// INSERT operation 
let valueToInsert = 5;
arr[n] = valueToInsert;
n++;

valueToInsert = 10;
arr[n] = valueToInsert;
n++;

valueToInsert = 15;
arr[n] = valueToInsert;
n++;

// VIEW operation 
console.log("Array elements:");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

// DELETE operation
let indexToDelete = 1;
if (indexToDelete >= 0 && indexToDelete < n) {
    for (let i = indexToDelete; i < n - 1; i++) {
        arr[i] = arr[i + 1]; // Shift elements left
    }
    n--; // Reduce size after deletion
} else {
    console.log("Invalid index for deletion.");
}


console.log("Array after deletion:");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
//2wap to implement quick sort using javascript with dsa.
function quickSort(arr) {
    
    if (arr.length <= 1) {
      return arr;
    }
  

    console. log = arr[arr.length - 1];
    const left = []
    const right = [];
  
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); 
      } else {
        right.push(arr[i]); 
      }
    }
  
    
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = quickSort
  
  console.log
  console.log

//3wap to count even and add values from 2d array using javascript
function countEvenAndSum(array2D) {
    let evenCount = 0;
    let totalSum = 0;
  
    for (let row of array2D) {
      for (let value of row) {
        totalSum += value;
        if (value % 2 === 0) {
          evenCount++;
        }
      }
    }
  
    return {
      evenCount,
      totalSum
    };
  }
  
  // Example usage
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = countEvenAndSum(arr);
  console.log("Count of even numbers:", result.evenCount);
  console.log("Sum of all numbers:", result.totalSum);
  
 //4wap to implement insert and remove element from queue using javascript
 class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
      console.log(`${element} inserted into the queue.`);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Cannot dequeue.");
        return null;
      }
      const removedItem = this.items.shift();
      console.log(` removed from the queue.`,removedItem);
      return removedItem;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return null;
      }
      return this.items[0];
    }
  
    printQueue() {
      console.log("Queue:", this.items.join(" -> "));
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  myQueue.printQueue();
  myQueue.dequeue();
  myQueue.printQueue();
  

    

  
