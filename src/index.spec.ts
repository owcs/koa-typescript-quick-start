import { describe, expect, it } from "vitest";

describe("simple test", () => {
  it("should not fail", () => {
    expect.assertions(1);

    expect(true).toBe(true);
  });
});
