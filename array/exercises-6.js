// make a list of number with values : 10, 3,6,12,40,7,15,9

// find the largest number

const newArray = [10, 3, 6, 12, 40, 7, 15, 9];
let max = newArray[0];

for (let i = newArray[1]; i < newArray.length; i++) {
  if (max < newArray[i]) {
    max = newArray[i];
  }
}
console.log(max);
// console.log(Math.max(...newArray));
