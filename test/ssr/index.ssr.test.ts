import path from 'path'
import { setupTest, get } from '@nuxt/test-utils'

describe('v-aspect-ratio.ssr', () => {
  setupTest({
    rootDir: path.resolve(__dirname, './fixture'),
    testDir: path.resolve(__dirname, '..'),
    server: true,
  })

  it('should correctly set aspect-ratio', async () => {
    const { body } = await get('/')
    expect(body).toContain(
      '<section id="simple" style="padding-bottom:56.25%;"></section>'
    )
    expect(
      (body as string).match(
        /<div style="color:red;padding-bottom:56.25%;"><\/div>/g
      )?.length
    ).toBe(3)
  })
})
