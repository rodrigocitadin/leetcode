// Solution 1
function lengthOfLongestSubstring1(s: string): number {
  let longest: number = 0;
  let uniqueSubstring: string[] = [];

  for (const char of s) {
    if (uniqueSubstring.includes(char)) {
      uniqueSubstring = uniqueSubstring.splice(uniqueSubstring.indexOf(char) + 1);
    }

    if (!uniqueSubstring.includes(char)) uniqueSubstring.push(char);

    if (uniqueSubstring.length > longest) longest = uniqueSubstring.length;
  }

  return longest;
}

// Solution 2
function lengthOfLongestSubstring2(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s.charAt(end);

    if (charMap.has(currentChar)) start = Math.max(start, charMap.get(currentChar)! + 1);

    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
