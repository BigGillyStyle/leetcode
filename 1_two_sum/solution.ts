export function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = [];
  const numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (numsMap.has(key)) {
      return [i, numsMap.get(key) as number];
    }
    numsMap.set(nums[i], i);
  }

  return answer;
}
