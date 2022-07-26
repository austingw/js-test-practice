import analyze from "../code/5-analyzeArray";

test("analyzes array for average of all numbers", () => {
  expect(analyze([4, 2, 6, 4])).toEqual({
    average: 4,
    min: 2,
    max: 6,
    length: 4,
  });
});
