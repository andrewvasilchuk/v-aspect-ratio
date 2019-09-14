import { createLocalVue, mount } from '@vue/test-utils'
import AspectRatio from '../dist/v-aspect-ratio'

describe('directive usage', () => {
  let mountWithDirective

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(AspectRatio)
    mountWithDirective = (arg, options) => mount(arg, { ...options, localVue })
  })

  it('should correctly set aspect ratio', () => {
    const [a, b] = [16, 9]

    const wrapper = mountWithDirective({
      template: `<div v-aspect-ratio="\`${a}:${b}\`"></div>`,
    })

    expect(wrapper.vm.$el.style.paddingBottom).toBe(`${(b / a) * 100}%`)
  })

  it('should correctly set aspect ratio when value is updated', () => {
    const [a, b] = [4, 3]

    const wrapper = mountWithDirective({
      template: `<div v-aspect-ratio="aspectRatio"></div>`,
      data() {
        return {
          aspectRatio: '16:9',
        }
      },
    })

    wrapper.setData({ aspectRatio: `${a}:${b}` })

    expect(wrapper.vm.$el.style.paddingBottom).toBe(`${(b / a) * 100}%`)
  })

  it('should throw an error when invalid value is passed', () => {
    expect(() => {
      mountWithDirective({
        template: `<div v-aspect-ratio="'INVALID_VALUE'"></div>`,
      })
    }).toThrow()
  })

  it('should throw an error when division by zero is detected', () => {
    expect(() => {
      mountWithDirective({
        template: `<div v-aspect-ratio="'0:9'"></div>`,
      })
    }).toThrow()
  })

  it('should throw an error when no value is provided', () => {
    expect(() => {
      mountWithDirective({
        template: `<div v-aspect-ratio=""></div>`,
      })
    }).toThrow()
  })
})
