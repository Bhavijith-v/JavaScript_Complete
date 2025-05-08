class Shape {
    area() {
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Create an instance of Circle
  const myCircle = new Circle(5);
  
  // Print area
  console.log("Area of circle:", myCircle.area().toFixed(2)); // Output: Area of circle: 78.54
  