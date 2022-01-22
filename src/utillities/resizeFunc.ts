import sharp from 'sharp'

const resize = async (fileName: string, width: number, height: number) => {
  try {
    await sharp(`images/${fileName}.jpg`)
      .resize({ width, height })
      .toFile(`resizedImages/${fileName + '_' + width + '_' + height}.jpg`)

    return `resizedImages/${fileName + '_' + width + '_' + height}.jpg`
  } catch {
    return false
  }
}

export { resize }
