export function getDatesInRange(from: Date, to: Date) {
  const date = new Date(from.getTime());

  const dates = [];

  while (date <= to) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
