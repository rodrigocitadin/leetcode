function removeDuplicates(nums: number[]): number {
  let adjust = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      adjust += 1;
    }

    nums[i - adjust] = nums[i];
  }

  return nums.length - adjust;
};
