## Greedy method 
Establish a predefined optimal solution at start, and apply that procedure till the problem is solved and assume the 
solution is an optimal solution.

## Dynamic programming
- In Dynamic, try all possible solutions and choose a best solutions.
- Its costly and time consuming
- Dynamic programs are solved by using recursive *formulas* - not necessarily with recursion(recursive iteration) 
- DP is mostly solved using Iteration rather than recursion. ie. Solving using Recursive function with Iteration
- solve a smaller sub-problem and extend that to bigger problem
- since sub-problem gets repeated, we can memoize using a table/cache(storing the results in a datastructure for lookup) and prevent re-execution (memoization)

Steps to follow to solve a DP 
- understand the i/p and o/p
- define the sub-problem
- derive the sub-function (recursive) for the sub-problem
- Iterate to apply for all inputs - all solutions
- backtrack to find the optimal solution




