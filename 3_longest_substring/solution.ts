export function lengthOfLongestSubstring(characters: string): number {
  const inputStrLength = characters.length;
  if (inputStrLength < 2) {
    return inputStrLength;
  }

  let length = 0;
  let leftIndex = 0;
  const characterMap = new Map<string, number>();
  for (let rightIndex = 0; rightIndex < inputStrLength; rightIndex++) {
    const character = characters[rightIndex];
    const prevCharIndex = characterMap.get(character);
    if (characterMap.has(character) && prevCharIndex! >= leftIndex) {
      leftIndex = prevCharIndex! + 1;
    }

    length = Math.max(length, rightIndex - leftIndex + 1);
    characterMap.set(character, rightIndex);
  }

  return length;
}
