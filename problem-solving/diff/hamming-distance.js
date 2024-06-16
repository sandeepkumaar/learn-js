/**
 * Hamming Distance. Diff of two strings
 */


let str1 = '965975';
let str2 = '90506500';


function stringDiff(str1, str2) {
  let maxLen = Math.max(str1.length, str2.length);

  let arr = [];
  for(let i=0; i<=maxLen; i++) {
    if(str1[i] === str2[i]) {
      continue;
    };
    arr.push([i, str1[i], str2[i]]);
  }


  return arr;
  
};

console.log(str1, str2, stringDiff(str1, str2));
