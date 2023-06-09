function checkPalindrome(
  s: string,
  firstPos: number,
  secondPos: number
): boolean {
  while (firstPos < secondPos) {
    if (s.charAt(firstPos) !== s.charAt(secondPos)) {
      return false;
    }
    firstPos++;
    secondPos--;
  }
  return true;
}

export function validPalindrome(s: string): boolean {
  let firstPos = 0;
  let secondPos = s.length - 1;
  while (firstPos < secondPos) {
    if (s.charAt(firstPos) !== s.charAt(secondPos)) {
      return (
        checkPalindrome(s, firstPos, secondPos - 1) ||
        checkPalindrome(s, firstPos + 1, secondPos)
      );
    }
    firstPos++;
    secondPos--;
  }
  return true;
}
