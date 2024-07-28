/**
 * Sequence: [ 0, 1, 1, 2, 3, 5, 8, 13,...] 
 * Derive Problem function
 * f(0) = 0; if n == 0
 * f(1) = 1; if n == 1
 * f(2) = f(n-2) + f(n-1)
 * f(n) = f(n-1) + f(n-2) if n > 1
*/

let fibCount = 0;
function fib(n) {
  fibCount++;
  if(n <= 1) return n;
  
  return fib(n - 2) + fib(n - 1)
};


// using memo
let fibMemoCount = 0;
let memo = [];
function fibMemo(n) {
  fibMemoCount++;
  if(n <= 1) return n;

  if(memo[n] !== undefined) return memo[n];
  
  memo[n] = fibMemo(n - 2) + fibMemo(n - 1)

  return memo[n];
};


console.log(fib(7), fibCount);
console.log(fibMemo(7), fibMemoCount);
