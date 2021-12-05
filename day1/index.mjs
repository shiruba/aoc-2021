import { readFile } from "fs/promises";

async function parseInput() {
  const data = await readFile("day1/input.txt", "utf-8");
  return data.split("\n").map((s) => parseInt(s, 10));
}

const input = await parseInput();
const reducer = function (accumulator, currentValue, currentIndex, array) {
  return currentValue > array[currentIndex - 1] ? accumulator + 1 : accumulator;
};

console.log(input.reduce(reducer, 0));
