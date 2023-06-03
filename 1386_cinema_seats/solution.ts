export function maxNumberOfFamilies(
  rows: number,
  reservedSeats: number[][]
): number {
  const reservedMap = new Map<number, number[]>();
  const reservableMap = new Map<number, number[]>();
  for (
    let reservedSeat = 0;
    reservedSeat < reservedSeats.length;
    reservedSeat++
  ) {
    const [row, seat] = reservedSeats[reservedSeat];
    if (reservedMap.has(row)) {
      reservedMap.set(row, [...(reservedMap.get(row) as number[]), seat]);
    } else {
      reservedMap.set(row, [seat]);
    }
  }

  const validSeats = [2, 4, 6];
  for (let row = 1; row <= rows; row++) {
    for (let i = 0; i < validSeats.length; i++) {
      const seat = validSeats[i];
      if (reservedMap.has(row)) {
        let reservedSeats = reservedMap.get(row) as number[];
        let desiredSeats = [seat, seat + 1, seat + 2, seat + 3];
        if (
          !reservedSeats.some((reservedSeat) =>
            desiredSeats.includes(reservedSeat)
          )
        ) {
          if (reservableMap.has(row)) {
            const reservableSeats = reservableMap.get(row) as number[];
            if (!reservableSeats.includes(seat - 2)) {
              reservableMap.set(row, [...reservableSeats, seat]);
            }
          } else {
            reservableMap.set(row, [seat]);
          }
        }
      } else {
        if (reservableMap.has(row)) {
          const reservableSeats = reservableMap.get(row) as number[];
          if (!reservableSeats.includes(seat - 2)) {
            reservableMap.set(row, [...reservableSeats, seat]);
          }
        } else {
          reservableMap.set(row, [seat]);
        }
      }
    }
  }

  return Array.from(reservableMap.values()).flat().length;
}
