function dfs(nums, target, path, result) { 
  console.log({nums, target, path, result});
    if(target < 0){ 
            // Backtracking 
        return; 
    } 
    if(target === 0){ 
        result.push(path); 
        return; 
    } 
    for(let i = 0; i < nums.length; i++){ 
        dfs(nums.slice(i), target - nums[i], [...path, nums[i]], result); 
    } 
} 


let result = [];
dfs([2, 3, 6, 7], 7, [], result);

console.log(result);
