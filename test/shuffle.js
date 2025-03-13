import { expect } from "chai";
import { shuffle } from "../src/Shuffle.js";

describe("Shuffle Function", function () {
  it("should shuffle array elements", function () {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);

    expect(shuffledArray).to.have.members(originalArray);
    expect(shuffledArray).to.not.deep.equal(originalArray);
  });
});
