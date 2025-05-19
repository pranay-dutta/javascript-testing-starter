import { it, expect, describe } from "vitest";
import { calculateDiscount } from "../main";

describe("calculateDiscount", () => {
  it("should return invalid if first arg is neg or not number", () => {
    expect(calculateDiscount(0, "")).toMatch(/invalid/i); //not reqiured in ts
  });
  it("should return valid discount", () => {
    expect(calculateDiscount(10, "SAVE1")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });
});
