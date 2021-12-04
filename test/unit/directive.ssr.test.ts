import { directive } from '../../src/directive.ssr'

describe('directive.ssr', () => {
  describe('should update padding bottom of a passed VNode', () => {
    it('when `data` is `undefined`', () => {
      const vnode = {}
      // @ts-expect-error Expected
      directive(vnode, { value: '1:1' })
      // @ts-expect-error Expected
      expect(vnode.data.style.paddingBottom).toBe('100%')
    })

    it('when `data.style` is `undefined`', () => {
      const vnode = { data: {} }
      // @ts-expect-error Expected
      directive(vnode, { value: '1:1' })
      // @ts-expect-error Expected
      expect(vnode.data.style.paddingBottom).toBe('100%')
    })

    it('when `data.style` is `Array`', () => {
      const vnode = { data: { style: ['color:red'] } }
      // @ts-expect-error Expected
      directive(vnode, { value: '1:1' })
      expect(vnode.data.style).toHaveLength(2)
      expect(vnode.data.style[0]).toBe('color:red')
      expect(vnode.data.style[1]).toStrictEqual({ paddingBottom: '100%' })
    })

    it('when `data.style` is `String`', () => {
      const vnode = { data: { style: 'color:red;' } }
      // @ts-expect-error Expected
      directive(vnode, { value: '1:1' })
      expect(vnode.data.style).toBe('color:red;padding-bottom: 100%;')
    })

    it('when `data.style` is `Object`', () => {
      const vnode = { data: { style: { color: 'red' } } }
      // @ts-expect-error Expected
      directive(vnode, { value: '1:1' })
      expect(vnode.data.style).toStrictEqual({
        color: 'red',
        paddingBottom: '100%',
      })
    })
  })
})
