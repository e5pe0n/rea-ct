class Bird {
  constructor(name) {
    this.name = name;
  }

  chirp = () => {
    console.log(`${this.name} chirps`);
  };

  static explain = (name) => {
    console.log(`${name} has wings and lay an egg.`);
  };
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly = () => {
    console.log(`${this.name} flys`);
  };
}


const penguin = new Bird("Penguin");
penguin.chirp();
Bird.explain('Crow');

const hawk = new FlyableBird('Hawk');
hawk.fly();