type romanNumerals = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const romanNumeralMap: Record<romanNumerals, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  const reversed = s.split("") as Array<romanNumerals>;

  let prevValue = 0;

  return reversed.reduceRight((acc, curr) => {
    const currValue = romanNumeralMap[curr];

    if (currValue < prevValue) {
      acc -= currValue;
    } else {
      acc += currValue;
    }
    prevValue = currValue;

    return acc;
  }, 0);
}
