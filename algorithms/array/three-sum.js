/**
 * sort the array for binary search
 * use index i = 0 as start value.
 * left = i + 1
 * right = length -1
 * binary search left/right. sum = arr[i] + left + right
 * when sum -store in results array.  move both pointers inside
 */
function threeSumTarget(nums, target) {
  // Sort the array to make it easier to avoid duplicates and use two pointers
  nums.sort((a, b) => a - b);

  // Initialize an array to store the result triplets
  const result = [];

  // Iterate through the array, stopping 2 elements before the end
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip the same element to avoid duplicate computation
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Initialize two pointers
    let left = i + 1;
    let right = nums.length - 1;

    // Use the two pointers to find the triplets
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        // If the sum equals the target, add the triplet to the result
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for the right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers inward
        left++;
        right--;
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If the sum is greater than the target, move the right pointer to the left
        right--;
      }
    }
  }

  return result;
}

// Example usage:
let nums = [-1, 0, 1, 2, -1, -4];
let target = 1;
console.log(threeSumTarget(nums, target)); // Output can be [[-1, 0, 2]]
