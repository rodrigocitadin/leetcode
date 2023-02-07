let solution = function (isBadVersion: any) {
  return function (number: number): number {
    let left = 1, right = number, res = 1;

    while (right >= left) {
      const middle = Math.floor((right + left) / 2);

      if (!isBadVersion(middle)) {
        if (isBadVersion(middle + 1)) {
          return res = middle + 1;
        }
        left = middle + 1;
      }
      else {
        right = middle - 1;
      }
    }

    return res;
  }
}