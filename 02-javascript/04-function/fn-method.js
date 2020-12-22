const foo = {
  bar: 'bar',
  baz: function() {
    console.log('I am `baz` method');
  }
}
foo.baz();

const fuu = {
  bar: 'bar',
  baz() {
    console.log("I am `baz` method");
  }
}
fuu.baz();