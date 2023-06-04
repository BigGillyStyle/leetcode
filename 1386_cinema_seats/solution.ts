export function maxNumberOfFamilies(
  rows: number,
  reservedSeats: number[][]
): number {
  let maxNumberOfFamilies = rows * 2;
  const leftSeats = [2, 3, 4, 5];
  const middleSeats = [4, 5, 6, 7];
  const rightSeats = [6, 7, 8, 9];
  const reservations: Record<number, SeatGroup[]> = {};

  for (let rowSeat = 0; rowSeat < reservedSeats.length; rowSeat++) {
    const [row, seat] = reservedSeats[rowSeat];
    if (leftSeats.includes(seat)) {
      addReservationToRow(reservations, row, SeatGroup.LEFT_SEAT);
    }
    if (middleSeats.includes(seat)) {
      addReservationToRow(reservations, row, SeatGroup.MIDDLE_SEAT);
    }
    if (rightSeats.includes(seat)) {
      addReservationToRow(reservations, row, SeatGroup.RIGHT_SEAT);
    }
  }

  for (const [_, seats] of Object.entries(reservations)) {
    if (seats.length === 3) {
      maxNumberOfFamilies -= 2;
    } else {
      maxNumberOfFamilies -= 1;
    }
  }

  return maxNumberOfFamilies;
}

enum SeatGroup {
  LEFT_SEAT,
  MIDDLE_SEAT,
  RIGHT_SEAT,
}

function addReservationToRow(
  reservations: Record<number, SeatGroup[]>,
  row: number,
  seatGroup: SeatGroup
): void {
  if (!reservations[row]) {
    reservations[row] = [seatGroup];
  } else if (!reservations[row].includes(seatGroup)) {
    reservations[row] = [...reservations[row], seatGroup];
  }
}
