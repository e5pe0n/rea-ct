const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  return sayHello;
}

const greet = greeter('Jun');
greet();

const greeter2 = (target) => () => console.log(`Hi, ${target}!`);
const greet2 = greeter2('Junichi');
greet2();