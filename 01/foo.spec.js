import bar from "./bar";
import foo from "./foo";
jest.mock("./bar.js", () => {
  return jest.fn();
});

test("should call bar", () => {
  // when
  foo();

  // then
  expect(bar).toBeCalled();
});
