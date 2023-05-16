function isValid(s: string): boolean {
  let temp = [];
  let store = { ')': '(', '}': '{', ']': '[' }

  for (let i = 0; i < s.length; i++) {
    if (temp.length < 1) temp.push(s[i])
    else if (temp[temp.length - 1] !== store[s[i]]) temp.push(s[i])
    else temp.pop();
  }

  return !(temp.length > 0)
};