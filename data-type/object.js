const student = {
  name: "Wijaya",
  age: 22,
  favSubject: "Language",
  bestFriend: {
    name: "kadek",
    age: 22,
  },
};

console.log(student.bestFriend.age);

const car = {
  brand: "Toyota",
  name: "Avanza",
  year: 2015,
};

const ownerToyota = {
  name: "Wijaya",
  address: {
    city: "Denpasar",
    street: "Ubung 123",
  },
};

const carWithOwner = {
  ...car,
  ownerToyota,
};

const {
  ownerToyota: { name: ownerName },
} = carWithOwner;

console.log(ownerName, ownerToyota);
