// make a list of number with values : 10, 3,6,12,40,7,15,9

// create a loop to print out each number that is larger than 15

const newArray = [10, 3, 6, 12, 40, 7, 15, 9];

newArray.map((val) => (val > 15 ? console.log(val) : ""));
newArray.forEach((val) => (val > 15 ? console.log(val) : ""));

let i = 0;
while (i < newArray.length) {
  if (newArray[i] > 15) {
    console.log(newArray[i]);
  }
  i++;
}
