import { describe, it, expect } from "vitest";
import { fizzBuzz, max, calculateAverage, factorial } from "../intro";

describe("max", () => {
  //Arrange: Turn on the TV
  //Act: Press the power button
  //Assert: Verify TV is off

  it("should return the first argument if it is greater.", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater.", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal.", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if n is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if n is only divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz if n is only divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return n as string if n is neiter divisible by 3 or 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should return average if given an array of numbers", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
});

describe("factorial", () => {
  it("should return 1 if n is 0 or 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });
  it("should return the factorial of n", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
  });
  it("should return undefined if n is negative", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
