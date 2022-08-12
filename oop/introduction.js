// introduction into Object Oriented in JavaScript

class Product {
  constructor(name, qty, brand) {
    this.name = name;
    this.quantity = qty;
    this.brand = brand;
  }
  getProduct() {
    const productResult = `This ${this.name}\n has ${this.quantity} items \n with brand ${this.brand}`;
    return productResult;
  }
}
