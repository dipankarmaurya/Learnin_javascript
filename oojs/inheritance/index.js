class Vehicle{
    constructor(price, wheels) {
        this.price = price;
        this.wheels = wheels;
    }
    getprice() {
        return this.price;
    }
    printDescriptin() {
        console.log(`vehicle has ${price} ${wheels}`);
    }
}

class Car extends Vehicle{
    constructor(price,doors) {
        //if we have a constructor in subclass we have to call "super()" before using "this" keyword;
        super(price,4)
        this.doors = doors;
    }
}

let c = new Car(40000,2);

console.log(c);

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Lion extends Cat {
    speak() {
    //   super.speak();
      console.log(`${this.name} roars.`);
    }
  }
  
  let l = new Lion('Fuzzy');
  l.speak();
  // Fuzzy makes a noise.
  // Fuzzy roars.