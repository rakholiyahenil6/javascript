// 1. Write a simple JavaScript program to print expected Output using the following array.
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));
console.log(myColor.slice(0, 3).join(","));
console.log(myColor[0]);
console.log(myColor.slice(1, 3).join(","));
console.log([...myColor, "orange"].join(","));

/============================================/

// 2. Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.
const numbers = [1, 2, 3, 4, 5];
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i];
}
console.log("Sum using for loop:", sumFor);

let sumForEach = 0;
numbers.forEach(num => sumForEach += num);
console.log("Sum using forEach loop:", sumForEach);

/============================================/

// 3. Write a JavaScript program to print a maximum and minimum value of given array.
function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}
const values = [3, 7, 2, 8, 5];
const { max, min } = findMinMax(values);
console.log("Maximum:", max, "Minimum:", min);

/============================================/

// 4. Write a JavaScript program to convert all array elements into ASCII values.
const characters = ['A', 'B', 'C'];
const asciiValues = characters.map(char => char.charCodeAt(0));
console.log("ASCII values:", asciiValues);

/============================================/

// 5. Write a JavaScript program to remove negative values using the filter array function.
const nums = [-12, -5, 0, 1, 5, 12, 19, 201];
const positiveNums = nums.filter(num => num >= 0);
console.log("Filtered positive values:", positiveNums);

/============================================/

// 6. Write a JavaScript program using array map() method and return the square of the array element.
const arr = [2, 5, 6, 3, 8, 9];
const squaredArr = arr.map(num => num ** 2);
console.log("Squared array:", squaredArr);

/============================================/

// 7. Write a JavaScript program for sorting an array in ascending and descending order.
const sortNumbers = [12, 5, 0, 1, 5, 12, 19, 20];
sortNumbers.sort((a, b) => a - b);
console.log("Sorted in ascending order:", sortNumbers);
sortNumbers.sort((a, b) => b - a);
console.log("Sorted in descending order:", sortNumbers);

// myColor array sorting
const colorCopy = [...myColor];
colorCopy.sort();
console.log("Colors sorted in ascending order:", colorCopy);
colorCopy.sort((a, b) => (a > b ? -1 : 1));
console.log("Colors sorted in descending order:", colorCopy);

/============================================/

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const filteredWords = words.filter(word => word.length >= 8);
console.log("Filtered words (>= 8 characters):", filteredWords);

/============================================/

// 9. Write a JavaScript program to print expected output for the following string.
let x = "airplane";
console.log(x[1]);

x = "oxoxoxox";
console.log(x);

x = "A New Java Book";
console.log(x.toLowerCase(), x.toUpperCase());

/============================================/

// 10. Write a JavaScript program for array reverse.
const reverseArray = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray.reverse());

/============================================/

// 11. Write a JavaScript program to check if a value is found or not.
const searchValue = 19;
const searchResult = sortNumbers.includes(searchValue);
console.log(Value ${searchValue} found:, searchResult);

/============================================/

// 12. Write a JavaScript program to print your name and write the number of total characters.
const myName = "Khushal";
console.log("Name:", myName, "Length:", myName.length);

/============================================/

// 13. Write a JavaScript program given this output using replace concept.
let sentence = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
const updatedSentence = sentence.replace(/dog/g, "cat");
console.log(updatedSentence);

/============================================/

// 14. Write a JavaScript program convert string to array.
const inputString = "Hire the top 1% freelance developers";
const stringToArray = inputString.split(" ");
console.log(stringToArray);

/============================================/

// 15. Write a JavaScript program to convert an array to string.
const inputArray = ['5', 32, 'Daniel'];
const arrayToString = inputArray.join(",");
console.log(arrayToString);