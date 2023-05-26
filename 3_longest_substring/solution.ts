export function lengthOfLongestSubstring(s: string): number {
  const inputStrLength = s.length;
  if (inputStrLength < 2) {
    return inputStrLength;
  }

  let maxLength = 0;
  let leftIndex = 0;
  const charMap = new Map<string, number>();
  for (let rightIndex = 0; rightIndex < inputStrLength; rightIndex++) {
    const char = s[rightIndex];
    if (charMap.has(char)) {
      leftIndex = (charMap.get(char) as number) + 1;
    }

    maxLength = Math.max(maxLength, rightIndex - leftIndex + 1);
    charMap.set(char, rightIndex);
  }

  return maxLength;
}
