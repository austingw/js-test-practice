import caesar from "../code/4-caesarCipher";

test("works with single letters", () => {
  expect(caesar("A", 1)).toBe("B");
});
test("works with words and keeps same case for each", () => {
  expect(caesar("Aaa", 1)).toBe("Bbb");
});
test("wraps", () => {
  expect(caesar("Z", 1)).toBe("A");
});
test("also shifts punctuation", () => {
  expect(caesar("Hello World", 1)).toBe("Ifmmp;Xpsme");
});
