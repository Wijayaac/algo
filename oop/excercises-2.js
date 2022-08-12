// Create a restaurant class
// prop : @name : string, @menuItems : [], @city: string
// method : add menu items, find most expensive menu : return menu name

// Create a menu class
// prop : @name, @price
// method : add menu items

class Menu {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getMenu() {
    return { name: this.name, price: this.price };
  }
}

class Restaurant {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.menuItems = [];
  }

  setMenu(item) {
    this.menuItems.push(item);
  }

  getExpensive() {
    const menu = this.menuItems.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );
    return `The most expensive menu ${menu.name} with price Rp.${menu.price},00`;
  }
}

const bakmi = new Menu("bakmi", 20000);
const nasgor = new Menu("nasi goreng", 30000);
const migor = new Menu("mie goreng", 40000);

const sederhana = new Restaurant("RM Sederhana", "Padang");

sederhana.setMenu(bakmi.getMenu());
sederhana.setMenu(nasgor.getMenu());
sederhana.setMenu(migor.getMenu());

console.log(sederhana);
console.log(sederhana.getExpensive());
