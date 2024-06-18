import { shallowMount } from "@vue/test-utils";
import Dashboard from "../src/components/Dashboard.vue";

describe("Dashboard.test.js", () => {
  const wrapper = shallowMount(Dashboard);

  it("equals msg to Hello", () => {
    expect(wrapper.vm.msg).toEqual("Hello, Vue with Webpack!");
  });
});
