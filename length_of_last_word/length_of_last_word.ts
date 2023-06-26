function lengthOfLastWord(s: string): number {
  let array: string[] = s.trim().split(" ");
  let result: string = array[array.length - 1];

  return result.length;
}
