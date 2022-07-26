import capitalize from "../code/1-capitalize";

test('"test" should become "Test"', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"testing now" should become "Testing now"', () => {
  expect(capitalize("testing now")).toBe("Testing now");
});

test('"123 test" should become "123 test"', () => {
  expect(capitalize("123 test")).toBe("123 test");
});
