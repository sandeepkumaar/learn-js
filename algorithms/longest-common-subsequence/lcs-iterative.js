/**
 *
 */

/*
       0  1  2  3  4  5  6  7 

       "  G  X  T  X  A  Y  B
0  "   0  0  0  0  0  0  0  0
1  A   0  0  0  0  0  1^ 1  1
2  G   0  1^ 1  1  1  1  1  1
3  G   0  1^ 1  1  1  1  1  1
4  T   0  1  1  2^ 2  2  2  2
5  A   0  1  1  2  2  3^ 3  3
6  B   0  1  1  2  2  3  3  4^

*/
function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // create a db array of M x N with initial 0 values for previous sub-problem solution 
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // iterate i(m) and j(n) by starting at 1 so 
  // we can use previous values (0) dp[i-1, j-1] problem solution
  // also dp[i, j] is equal to str[i-1], str[j-1]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // check if dp[i, j] matches
      // yes - dp[i, j] = 1 + previous soln for backtracking sequence
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // if no match 
        // dp[i, j] will be max value of dp[i -1, j] & dp[i, j-1] - previous sequence
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // backtrack bottom up. start from last elements from str and dp
  // i and j represents the last element
  // dp[i, j]  === str[i-1], str[j-1]
  // if match found move both i--, j-- // diagnally
  // if no match - move to the value which is greater
  let lcs = "";
  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    // if match found move both i--, j-- // diagnally
    if (str1[i - 1] === str2[j - 1]) {
      // store the lcs
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } 
    // if no match - move to the value which is greater
    else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Example usage
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2)); // Output: "GTAB"

