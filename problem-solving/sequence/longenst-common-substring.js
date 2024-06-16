
function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const l = str2.length;

    // Create a 2D array to store the lengths of longest common substrings
    const dp = Array(m + 1).fill(null).map(() => Array(l + 1).fill(0));
  console.log(dp);

    let maxLength = 0;
    let endIdx = 0;

    // Fill dp array using bottom-up approach
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= l; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIdx = i - 1;
                }
            }
        }
    };
  console.log(dp, endIdx);

    // Extract the longest common substring
    const startIdx = endIdx - maxLength + 1;
    return str1.substring(startIdx, endIdx + 1);
}

// Example usage
let str1 = "ABABC";
let str2 = "BABCA";
console.log(longestCommonSubstring(str1, str2)); 
// Output: "BABC"
