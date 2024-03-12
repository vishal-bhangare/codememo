import { isEven } from "./math";

describe("isEven", () => {
  it("should be true", () => {
    // Function under test(SUT)
    const result = isEven(2);
    expect(result).toEqual(true);
  });

  it("should be false", () => {
    // Function under test(SUT)
    const result = isEven(3);
    expect(result).toEqual(false);
  });
});
