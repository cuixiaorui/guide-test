import { mount } from "@cypress/vue";
import App from "../../src/App.vue";

describe("App", () => {
  it("should show app", () => {
    mount(App);

    cy.contains("App");

    cy.get("button").click()
    // 也可以通过 cy.vueWrapper 来获取 wrapper
    // 一般用于验证组件 emit
  });
});
// vue react
