function Bird(name) {
  this.name = name;
  this.chirp = function() {
    console.log(`${this.name} chirps`);
  }

  return this;
}

Bird.explain = function(name) {
  console.log(`${name} has wings and lays an agg`);
}

function FlyableBird(name) {
  Bird.call(this, name);
  this.fly = function() {
    console.log(`${this.name} flys`);
  }

  return this;
}

FlyableBird.prototype.__proto__ = Bird.prototype;
