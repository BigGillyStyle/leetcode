export function rotateTheBox(box: ItemValues[][]): ItemValues[][] {
  const totalRows = box.length;
  const totalColumns = box[0].length;
  let result: ItemValues[][] = empty2dArray(totalRows, totalColumns);
  console.dir(result);

  // iterate through each row to shift right ("down") first
  for (let rowNum = 0; rowNum < box.length; rowNum++) {
    const row = box[rowNum];
    let emptyCell = totalColumns - 1;

    for (let columnNum = row.length - 1; columnNum >= 0; columnNum--) {
      const element = row[columnNum];
      if (element === Item.OBSTACLE) {
        result[rowNum][columnNum] = Item.OBSTACLE;
        emptyCell = columnNum - 1;
      } else if (element === Item.STONE) {
        result[rowNum][emptyCell] = Item.STONE;
        emptyCell = emptyCell - 1;
      }
    }
  }

  const rotatedResult = empty2dArray(totalColumns, totalRows);

  for (let rowNum = 0; rowNum < result.length; rowNum++) {
    for (let columnNum = 0; columnNum < result[rowNum].length; columnNum++) {
      rotatedResult[columnNum][totalRows - rowNum - 1] =
        result[rowNum][columnNum];
    }
  }
  return rotatedResult;
}

const empty2dArray = (rows: number, columns: number) =>
  new Array(rows)
    .fill(Item.EMPTY)
    .map(() => new Array(columns).fill(Item.EMPTY));

enum Item {
  STONE = "#",
  OBSTACLE = "*",
  EMPTY = ".",
}

type ItemValues = `${Item}`;
