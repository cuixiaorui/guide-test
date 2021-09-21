import { render, screen, fireEvent } from "@testing-library/vue";
import Button from '../../src/components/Button.vue'


// nodejs
// nodejs  -> 模拟 浏览器环境的
//  很多问题
// ui -> 不好测 -》 ui 和逻辑层
test("increments value on click", async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.
  render(Button);

  // queryByText returns the first matching node for the provided text
  // or returns null.
  expect(screen.queryByText("Times clicked: 0")).toBeTruthy();

  // getByText returns the first matching node for the provided text
  // or throws an error.
  const button = screen.getByText("increment");

  // Click a couple of times.
  await fireEvent.click(button);
  await fireEvent.click(button);

  expect(screen.queryByText("Times clicked: 2")).toBeTruthy();
});
