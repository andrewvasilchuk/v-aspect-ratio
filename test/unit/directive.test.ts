import { directive } from '../../src/directive'

describe('directive', () => {
  it('should update padding bottom of a passed element', () => {
    const el = document.createElement('div')
    // @ts-expect-error Expected
    directive(el, { value: '1:1' })
    expect(el.style.paddingBottom).toBe('100%')
  })
})
