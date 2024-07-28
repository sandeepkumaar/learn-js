/** 
 * str1 = 'AGGTAB';
 * str2 = 'GXTXAYB';
 * 
 * whenever we want to compare 2 arrays. we have to put them is 2D array
 * str1 x str2
 *
 * Recursive formula
 * f(n) = f(n-2) + f(n-1) 
 * str1[i] == str2[j]  => lcs + str[i]; str1[i + 1] & str2[j + 1]
 * else
 * str1[i + 1] & str2[j]
 * str1[i] & str2[j + 1]
 *
 * Solve problems from previous solutions
 * Initial solution for fibonacci
 * [0, 1,] - based on this initial value construct the other sequence value until the required
 * number is reached
*/


let count = 0;
function longestCommonSubsequence(str1, str2) {
  
  function lcs(m, n) {
    count++;
    // handles 2 cases
    // 1. empty string
    // 2. recursion base case - return 
    if(m === 0 || n === 0) {
      return '';
    };
    if(str1[m - 1] === str2[n - 1]) {
      return lcs(m - 1, n - 1) + str1[m - 1]
    };
    let lcs1 = lcs(m -1, n) 
    let lcs2 = lcs(m, n -1) 
    return lcs1.length > lcs2.length ? lcs1 : lcs2;
  };

  let m = str1.length;
  let n = str2.length;
  return lcs(m, n);

};

const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2), count);
