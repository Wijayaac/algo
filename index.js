let price = 101,
  message = "";

if (price > 100) {
  message = "Too expensive";
} else if (price >= 50) {
  message = "Affordable";
} else {
  message = "damn cheap";
}

console.log(message);
