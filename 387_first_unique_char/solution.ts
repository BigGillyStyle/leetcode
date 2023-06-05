export function firstUniqChar(s: string): number {
  let firstUniqCharIndex = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!s.replace(char, "").includes(char)) {
      firstUniqCharIndex = i;
      break;
    }
  }

  return firstUniqCharIndex;
}
