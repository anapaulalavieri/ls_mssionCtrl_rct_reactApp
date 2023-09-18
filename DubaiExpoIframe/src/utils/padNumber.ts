export const padNumber = (number: string | number, count: number = 2) => {
  const [floor, fractional] = String(number).split(".");
  return `${floor}.${fractional ? fractional.padEnd(count, "0") : "0".repeat(count)}`;
};
