function lcs(str1, str2) {
  // Initialize a memoization array
  const memo = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(null));

  console.log(memo);
  // Define a helper function to perform the actual LCS calculation
  function lcsHelper(m, n) {
    console.log(memo);
    // Base case: If either string is empty, LCS is 0
    if (m === 0 || n === 0) {
      return "";
    }

    // Check the memo array to avoid redundant calculations
    if (memo[m][n] !== null) {
      return memo[m][n];
    }

    // If the last characters of both strings match
    if (str1[m - 1] === str2[n - 1]) {
      memo[m][n] = lcsHelper(m - 1, n - 1) + str1[m - 1];
    } else {
      // If the last characters do not match
      const lcs1 = lcsHelper(m, n - 1);
      const lcs2 = lcsHelper(m - 1, n);
      memo[m][n] = lcs1.length > lcs2.length ? lcs1 : lcs2;
    }

    return memo[m][n];
  }

  // Call the helper function with the lengths of the input strings
  const lcsString = lcsHelper(str1.length, str2.length);
  return { length: lcsString.length, sequence: lcsString };
}

// Example usage: calculate the LCS of two strings and print the characters
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
//const str1 = "abc";
//const str2 = "bac";
const result = lcs(str1, str2);
console.log(`Length of LCS is ${result.length}`); // Output: Length of LCS is 4
console.log(`LCS is ${result.sequence}`); // Output: LCS is GTAB
