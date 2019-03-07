import { createLocalVue, mount } from "@vue/test-utils";
import AspectRatio from "../dist/v-aspect-ratio";

describe("directive usage", () => {
  let mountWithDirective;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(AspectRatio);
    mountWithDirective = (arg, options) => mount(arg, { ...options, localVue });
  });

  it("should correctly set aspect ratio", () => {
    const [a, b] = [16, 9];

    const wrapper = mountWithDirective({
      template: `<div v-aspect-ratio="\`${a}:${b}\`"></div>`
    });

    expect(wrapper.vm.$el.style.paddingBottom).toBe(`${(b / a) * 100}%`);
  });
});
