/**
 * Sequence: [ 0, 1, 1, 2, 3, 5, 8, 13,...] 
 * Derive Problem function
 * f(0) = 0; if n == 0
 * f(1) = 1; if n == 1
 * f(2) = f(n-2) + f(n-1)
 * f(n) = f(n-1) + f(n-2) if n > 1
 *
 * Recursive formula
 * f(n) = f(n-2) + f(n-1) 
 * 
 * Solve problems from previous solutions
 * Initial solution for fibonacci
 * [0, 1,] - based on this initial value construct the other sequence value until the required
 * number is reached
*/


let count = 0;
function fib(n) {
  let dp = [0, 1];

  for(let i = 2; i <=n; i++) {
    dp[i] = dp[i-2] + dp[i-1]
    count++;
  };
  return dp[n];
  
}

console.log(fib(7), count);
