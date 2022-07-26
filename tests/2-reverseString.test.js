import reverseString from "../code/2-reverseString";

test("reverses single word", () => {
  expect(reverseString("Test")).toEqual("tseT");
});

test("reverses multiple words", () => {
  expect(reverseString("Testing again")).toEqual("niaga gnitseT");
});
test("works with numbers and punctuation", () => {
  expect(reverseString("123! abc!")).toEqual("!cba !321");
});
test("works with blank strings", () => {
  expect(reverseString("")).toEqual("");
});
