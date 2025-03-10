class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for radius
  get radius() {
    return this._radius;
  }

  // Getter for diameter
  get diameter() {
    return this._radius * 2;
  }

  // Getter for area
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

// Create a circle instance
const circle = new Circle(5);

// Using getters
console.log(circle.radius); // 5
console.log(circle.diameter); // 10
console.log(circle.area); // ~78.54
