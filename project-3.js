// 1.Write a program to implement binary search to find the index of a target element in a sorted array.


// function binarySearch(arr , target) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((right + left) / 2);

//         if (arr[mid] == target) {
//             return mid;
//         }
//         if(arr[mid] > target){
//             right = mid - 1;
//         }
//         else{
//             left = mid + 1;
//         }
//     }
//     return -1;
// }

// let data = [1,2,3,4,5,6,7,8,9];

// console.log(binarySearch(data,3));

// output :- 2

// ================================================================================


// 2.write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.  

// let arr = [1,2,3,4,4,4,4,4,4,5]

// function lowerbound(arr , target) {

//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
  
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] >= target ) {
//       right = mid - 1;
//     }
//     else{
//       left = mid + 1;
//     }
//   }
//   return left;
// }

// console.log("Lowerbound is", lowerbound(arr,4))


// function upperbound(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left >= right) {
  
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] >= target ) {
//       right = mid - 1;
//     }
//     else{
//       left = mid + 1;
//     }
//   }
//   return right;
// }
// console.log("Upperbound is:", upperbound(arr,4))

// let Lowerbound = lowerbound(arr,4)
// let Upperbound = upperbound(arr,4)

// function occurrence(Lowerbound , Upperbound ) {
//   console.log("Number of :", Upperbound - Lowerbound)
// }

// console.log(occurrence(Lowerbound , Upperbound));


// output :- 
// Lowerbound is 3
// Upperbound is: 9
// Number of : 6
