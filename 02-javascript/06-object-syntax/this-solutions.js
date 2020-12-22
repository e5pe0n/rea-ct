class Person {
  constructor (name) {
    this.name = name;
  }

  greet1() {
    const doIt = function() {
      console.log(`Hi, I'm ${this.name}`);
    };
    const bindedDoit = doIt.bind(this);
    bindedDoit();
  }

  greet2() {
    const doIt = function() {
      console.log(`Hi, I'm ${this.name}`);
    }
    doIt.call(this);
  }

  greet3() {
    const _this = this;
    const doIt = function() {
      console.log(`Hi, I'm ${_this.name}`);
    };
    doIt();
  }

  greet4() {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    }
    doIt();
  }

  greet5 = () => {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    }
    doIt();
  }
}