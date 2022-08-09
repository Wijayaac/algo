// make a list of number with values : 10, 3,6,12,40,7,15,9

// print only even number

const newArray = [10, 3, 6, 12, 40, 7, 15, 9];

// newArray.map((val) => (val % 2 == 0 ? console.log(val) : ""));

for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] % 2 === 0) {
    console.log(newArray[i]);
  }
}
