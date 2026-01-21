import randomDigit from "../src/randomDigit";
import { describe, it, expect, vi, Mock } from "vitest";

describe("randomDigit", () => {
  it("returns an integer between 0 and 9 (inclusive) over many calls", () => {
    for (let i: number = 0; i < 1000; i++) {
      const val: number = randomDigit();
      expect(Number.isInteger(val)).toBe(true);
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThanOrEqual(9);
    }
  });

  it("produces varying results (likely not all identical)", () => {
    const results: Set<number> = new Set<number>();
    for (let i: number = 0; i < 50; i++) {
      results.add(randomDigit());
      if (results.size > 1) break;
    }
    expect(results.size).toBeGreaterThan(1); // Very unlikely to fail unless Math.random is mocked globally
  });

  it("maps Math.random() outputs correctly to digit 0..9", () => {
    const originalRandom: () => number = Math.random;
    const cases: Array<[number, number]> = [
      [0.0, 0],
      [0.0999999, 0],
      [0.1, 1],
      [0.1999999, 1],
      [0.25, 2],
      [0.35, 3],
      [0.49, 4],
      [0.5000001, 5],
      [0.65, 6],
      [0.74, 7],
      [0.85, 8],
      [0.8999999, 8],
      [0.9000001, 9],
      [0.9999999, 9],
    ];
    try {
      for (const [mockVal, expected] of cases) {
        (Math.random as unknown as Mock) = vi.fn(() => mockVal);
        expect(randomDigit()).toBe(expected);
      }
    } finally {
      Math.random = originalRandom;
    }
  });

  it("never returns 10 when Math.random() is extremely close to 1", () => {
    const originalRandom: () => number = Math.random;
    try {
      (Math.random as unknown as Mock) = vi.fn(
        () => Number.EPSILON + (1 - Number.EPSILON * 2),
      );
      const val: number = randomDigit();
      expect(val).toBeLessThanOrEqual(9);
    } finally {
      Math.random = originalRandom;
    }
  });
});
