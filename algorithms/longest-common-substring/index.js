/*
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 1, 0, 0, 1 ],
[ 0, 1, 0, 2, 0, 0 ],
[ 0, 0, 2, 0, 0, 1 ],
[ 0, 1, 0, 3, 0, 0 ],
[ 0, 0, 0, 0, 4, 0 ]
]
*/
function longestCommonSubstring(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  let dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  let endIndex = 0; // for str1
  let substringLen = 0; // in str1

  for(let i = 1; i <=m; i++) {
    for(let j = 1; j <=m; j++) {
      if(str1[i-1] === str2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1]

        // above steps constructs dp
        // update sequence length
        if(dp[i][j] > substringLen) {
          substringLen = dp[i][j]
          endIndex = i;
        }
      }
    }
  };
  //
  // substring(startIndex, endIndex)
  // startIndex = endIndex - substringLen
  const longestCommonSubstr = str1.substring(endIndex - substringLen, endIndex);

  return {
    substringLen,
    endIndex,
    longestCommonSubstr

  };



};

// Example usage
const str1 = 'ABABC';
const str2 = 'BABCA';
const lcs = longestCommonSubstring(str1, str2);
//console.log(`Longest Common Substring of "${str1}" and "${str2}" is "${lcs}"`);
console.log(str1, str2, lcs);
