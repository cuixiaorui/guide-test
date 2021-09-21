import User from "./User";
test("should change name ", () => {
  // given
  const user = new User("xiaohong");

  // when
  user.setName("xiaohei");

  // then
  expect(user.getName()).toBe("xiaohei");
});
