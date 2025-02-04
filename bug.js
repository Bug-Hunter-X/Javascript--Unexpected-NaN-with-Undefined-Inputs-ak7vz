function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Add the numbers
}

console.log(foo(1,2)); //3
console.log(foo(null, 5)); //0
console.log(foo(undefined,5)); //NaN