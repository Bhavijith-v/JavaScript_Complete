class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is speaking`);
    }
}
let dog = new Animal("Dog");
dog.speak();