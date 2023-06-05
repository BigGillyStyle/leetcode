export function findBuildings(heights: number[]): number[] {
  const buildings: number[] = [];
  let tallestBuilding = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    if (height > tallestBuilding) {
      buildings.unshift(i);
      tallestBuilding = height;
    }
  }

  return buildings;
}
