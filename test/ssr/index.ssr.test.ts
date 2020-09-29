import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('v-aspect-ratio.ssr', () => {
  setupTest({
    testDir: __dirname,
    fixture: __dirname,
    browser: true,
  })

  it('should correctly set aspect-ratio', async (done) => {
    const page = await createPage('/')
    const element = await page.$('#target section')
    if (element) {
      expect(await element.getAttribute('style')).toBe('padding-bottom:56.25%;')
    } else {
      done.fail()
    }
    const elements = await page.$$('#target div')
    for (const element of elements) {
      const style = await element.getAttribute('style')
      expect(style).toBe('color:red;padding-bottom:56.25%;')
    }
    done()
  })
})
