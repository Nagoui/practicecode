// Fibonacci Series

function fibonacci(n) {
  let n1 = 0, n2 = 1, nextTerm;

  console.log('Fibonacci Series:');

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

const number = parseInt(prompt('Enter the number of terms: '));
fibonacci(number);
Use code with caution.

/*
Explanation:

Function declaration: The fibonacci function takes a single argument n which represents the number of terms to generate in the series.
Variable initialization:
n1 is initialized to 0, representing the first Fibonacci number.
n2 is initialized to 1, representing the second Fibonacci number.
nextTerm is declared to store the next term in the series.
Console output: Prints a message indicating the start of the Fibonacci series.
For loop:
Iterates from 1 to n (inclusive) to generate the specified number of terms.
Inside the loop:
Prints the current n1 value (which is the previous Fibonacci number).
Calculates the next Fibonacci number by adding n1 and n2, storing it in nextTerm.
Updates n1 with the current value of n2 to shift values for the next iteration.
Updates n2 with the newly calculated nextTerm.
User input: Prompts the user to enter the desired number of terms and converts the input to an integer using parseInt.
Function call: Calls the fibonacci function with the user-provided number of terms.
How it works:

The Fibonacci series starts with 0 and 1.
Each subsequent number is the sum of the two preceding ones.
The code iteratively calculates and prints the Fibonacci numbers based on this formula.
The for loop ensures that the series is generated up to the specified number of terms.
This code effectively generates and prints the Fibonacci series for the given number of terms.
*/
