function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b; // Add the numbers
}

console.log(foo(1,2)); //3
console.log(foo(null, 5)); //0
console.log(foo(undefined,5)); //0