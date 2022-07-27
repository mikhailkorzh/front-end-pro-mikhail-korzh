class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }

  stop() {
    console.log(`${this.name} is stoping`);
  }

  color() {
    this.color = "grey";
    console.log(`${this.name} is ${this.color}`);
  }
}

class Cat extends Animal {
  sounds() {
    console.log("miaw");
  }
  color(){
    console.log(`${this.name} is black`)
  }
}

class Dog extends Animal {
  sounds() {
    console.log("bark");
  }
}

let cat = new Cat("cat");

let dog = new Dog("dog");

let animal = new Animal();

class AnimalActionsProvider {
  animalAction(animal) {
    animal.run();
    animal.color();
  }
}

let action = new AnimalActionsProvider();
action.animalAction(cat);
action.animalAction(dog);
