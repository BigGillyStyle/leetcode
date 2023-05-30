export function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = [];

  for (let first = 0; first < nums.length - 1; first++) {
    for (let second = first + 1; second < nums.length; second++) {
      console.log("first, second", first, second);
      if (nums[first] + nums[second] === target) {
        answer = [first, second];
      }
    }
  }

  return answer;
}
