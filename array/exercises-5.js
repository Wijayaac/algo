// make a list of number with values : 10, 3,6,12,40,7,15,9

// print true if total array sum is even otherwise return false

const newArray = [10, 3, 6, 12, 40, 7, 15, 9];
let total = 0,
  message = false;

for (let i = 0; i < newArray.length; i++) {
  total += newArray[i]; // total = total + newArray[i]
}

if (total % 2 === 0) {
  message = true;
} else {
  message = false;
}

console.log(message);

// array reduce
// let totalSum = newArray.reduce((a, b) => a + b);
// console.log(totalSum % 2 === 0);
