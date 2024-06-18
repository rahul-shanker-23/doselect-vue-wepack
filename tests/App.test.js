import { shallowMount } from "@vue/test-utils";
import Dashboard from "../src/App.vue";

describe("App", () => {
  const wrapper = shallowMount(Dashboard);

  it("should have text 'Hello from vue'", () => {
    expect(wrapper.text()).toContain("Hello from Vue");
  });
});
