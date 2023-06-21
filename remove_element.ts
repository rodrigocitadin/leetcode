function removeElement(nums: number[], val: number): number {
  let k: number = 0;

  nums.map((number, index) => {
    if (number !== val) {
      nums[k] = nums[index];
      k++;
    }
  })

  return k;
};
