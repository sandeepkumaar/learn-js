
function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    // Create a 2D array to store lengths of longest common subsequence.
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Reconstruct the longest common subsequence from the dp array
    let lcs = '';
    let i = m;
    let j = n;
    
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs;
}

// Example usage
const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
console.log(longestCommonSubsequence(str1, str2)); // Output: "GTAB"



/*

   ""  G  X  T  X  A  Y  B
""  0  0  0  0  0  0  0  0
A   0  0  0  0  0  1  1  1
G   0  1  1  1  1  1  1  1
G   0  1  1  1  1  1  1  1
T   0  1  1  2  2  2  2  2
A   0  1  1  2  2  3  3  3
B   0  1  1  2  2  3  3  4



*/
