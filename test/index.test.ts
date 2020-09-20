import { TestManager } from './util'

describe('directive usage', () => {
  it('should correctly set aspect ratio', () => {
    const [a, b] = [16, 9]
    const wrapper = TestManager.createWrapper({
      template: `<div v-aspect-ratio="\`${a}:${b}\`"></div>`,
    })
    expect(wrapper.element.style.paddingBottom).toBe(`${(b / a) * 100}%`)
  })

  it('should correctly set aspect ratio when value is updated', () => {
    const [a, b] = [4, 3]

    const wrapper = TestManager.createWrapper({
      template: `<div v-aspect-ratio="aspectRatio"></div>`,
      data() {
        return {
          aspectRatio: '16:9',
        }
      },
    })

    wrapper.setData({ aspectRatio: `${a}:${b}` })

    expect(wrapper.element.style.paddingBottom).toBe(`${(b / a) * 100}%`)
  })
})
