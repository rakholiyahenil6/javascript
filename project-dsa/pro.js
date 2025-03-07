// Qustion = 1

let numbers = [90, 40, 20, 10, 50, 60, 70, 80, 30, 100];
console.log("Before sorting: ", numbers);

function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

sortDescending(numbers);
console.log("After sorting: ", numbers);




// Qustion = 3

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

for (let row = 0; row < matrix.length; row++) {
    let str = "";
    for (let col = 0; col < matrix.length; col++) {
        str += matrix[row][col] + " ";
    }
    console.log(str);
}

for (let row = 0; row < matrix.length; row++) {
    let str = "";
    for (let col = 0; col < matrix.length; col++) {
        str += matrix[row][col] * matrix[row][col] + " ";
    }
    console.log(str);
}