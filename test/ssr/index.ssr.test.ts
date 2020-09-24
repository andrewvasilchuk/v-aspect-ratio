import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('v-aspect-ratio.ssr', () => {
  setupTest({
    testDir: __dirname,
    fixture: __dirname,
    browser: true,
  })

  it('should correctly set aspect-ratio', async (done) => {
    const page = await createPage('/')
    const element = await page.$('#target')
    if (element === null) {
      done.fail()
    } else {
      const style = await element.getAttribute('style')
      expect(style).toBe('padding-bottom:56.25%;')
      done()
    }
  })
})
