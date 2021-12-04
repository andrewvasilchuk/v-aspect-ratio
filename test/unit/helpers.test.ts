import { getPaddingBottom } from '../../src/helpers'

describe('helpers', () => {
  describe('getPaddingBottom', () => {
    it('should correctly calculate padding-bottom value from an aspect ratio', () => {
      expect(getPaddingBottom('1:1')).toBe('100%')
    })
  })
})
