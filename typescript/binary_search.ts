function search(nums: number[], target: number): number {
  let left: number = 0, right: number = nums.length - 1, middle: number;

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};