function welcomeMessage(firstName, lastName) {
  return `Welcome to the class ${firstName} ${lastName} !`;
}

const message = welcomeMessage("Kadek", "Wijaya");

console.log(message);

// Arrow style

const welcomingMessage = (firstname, lastName) => {
  return `Welcome to the class ${firstname} ${lastName} !`;
};

const messageWelcome = welcomingMessage("Wijaya", "AC");

console.log(messageWelcome);
