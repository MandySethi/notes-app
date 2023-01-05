import { calculateCost } from "../util/cost";
import { expect, it, test } from "vitest";

test("Test lower tier", () => {
  const storage = 10;
  const cost = 4000;

  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("Test middle tier", () => {
  const storage = 100;
  const cost = 20000;

  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});

test("Test higher tier", () => {
  const storage = 101;
  const cost = 10100;

  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});
