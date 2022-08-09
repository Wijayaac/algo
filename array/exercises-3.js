// make a list of number with values : 10, 3,6,12,40,7,15,9

// print true if array containing value

const newArray = [10, 3, 6, 12, 40, 7, 15, 9],
  target = 12;
let message = "False!, array not containing the value";

for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] === target) {
    message = "True!, array containing the value";
  }
}

console.log(message);

console.log(newArray.includes(target));
