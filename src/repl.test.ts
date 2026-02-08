import { cleanInput } from "./replUtils.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "  Pikachu  ",
    expected: ["pikachu"],
  },
  {
    input: "   ",
    expected: [],
  }
])("cleanInput('$input')", ({ input, expected }) => {
  test(`Expected: [${expected.join(", ")}]`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
