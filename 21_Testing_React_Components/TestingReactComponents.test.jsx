import { describe, expect, it } from "vitest";

function add(a, b) {
  return a + b;
}

// Use this pattern when you want to show the shape of a React test file in a real repo.
describe("basic assertion example", () => {
  it("adds values", () => {
    expect(add(2, 3)).toBe(5);
  });
});
