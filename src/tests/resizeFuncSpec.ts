import { resize } from '../utillities/resizeFunc'

describe('Tesing Image Processing', () => {
  it('expects resize(fjord, 100, 100) to return an Image in the resizedFolder', async () => {
    const ret = await resize('fjord', 100, 100)
    expect(ret).toBe('resizedImages/fjord_100_100.jpg')
  })

  it('expects resize(fjorda, 100, 100) to throws an error! no such a file', async () => {
    const ret = await resize('fjord', 100, 100)
    expect(ret).toBeFalsy
  })
})
