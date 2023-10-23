//Fibonacci Sequence:

//Question: Write a function that generates the nth number in the Fibonacci sequence.
//The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. It typically starts with 0 and 1
//[0,1,1,2,3]
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// You can change the value of 'n' to calculate different Fibonacci numbers.
const n = 10;
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
