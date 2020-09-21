import { TestManager } from './util'

describe('v-aspect-ratio', () => {
  it('should correctly set aspect ratio', () => {
    const wrapper = TestManager.createWrapper({
      propsData: { aspectRatio: `16:9` },
    })
    expect(wrapper.element.style.paddingBottom).toBe('56.25%')
  })

  it('should correctly set aspect ratio when value is updated', (done) => {
    const wrapper = TestManager.createWrapper({
      propsData: { aspectRatio: '16:9' },
    })
    expect(wrapper.element.style.paddingBottom).toBe('56.25%')
    wrapper.vm.value = '4:3'
    wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.paddingBottom).toBe('75%')
      done()
    })
  })
})
