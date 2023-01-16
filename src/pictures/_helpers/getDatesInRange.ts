export function getDatesInRange(from: Date, to: Date) {
  if (from > to) {
    throw new Error("TO date cannot be earlier then FROM date");
  }

  const date = new Date(from.getTime());

  const dates = [];

  while (date <= to) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
