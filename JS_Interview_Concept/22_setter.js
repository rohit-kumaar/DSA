class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for radius
  get radius() {
    return this._radius;
  }

  // Setter for radius
  set radius(newRadius) {
    if (newRadius <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = newRadius;
  }

  // Getter for area
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

// Create a circle instance
const circle = new Circle(5);

// Using getter
console.log(circle.radius); // 5

// Using setter
circle.radius = 10; // Sets new radius
console.log(circle.radius); // 10
console.log(circle.area); // ~314.16

// This will throw an error
try {
  circle.radius = -5;
} catch (error) {
  console.log(error.message); // "Radius must be positive"
}
