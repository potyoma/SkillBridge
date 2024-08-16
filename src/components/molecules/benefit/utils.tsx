export function formatCounter(count: number) {
  if (count / 10 < 1) {
    return `0${count}`;
  }

  return count.toString();
}
