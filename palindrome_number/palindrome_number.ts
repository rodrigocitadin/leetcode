// Solution One

function isPalindrome(x: number): boolean {
  const right = x.toString();
  const left = x.toString().split("").reverse().join("");

  return right === left ? true : false;
};

// Solution Two

function isPalindrome2(x: number): boolean {
  const right: string = x.toString();
  let reverseIndex: number = right.length - 1;

  for (let letter of right) {
    if (letter !== right[reverseIndex]) {
      return false;
    }

    reverseIndex--;
  }

  return true;
}
