function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  const f = createHelloWorld();
  console.log(f()); // Output: "Hello World"
  
  console.log(f({}, null, 42)); // Output: "Hello World"
  console.log(f("abc", [1, 2, 3])); // Output: "Hello World"
    