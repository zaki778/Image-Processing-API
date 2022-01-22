import { resize } from '../utillities/resizeFunc'
import express from 'express'
import fileExists from 'file-exists'

const validator = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const filename: string = req.query.filename as string

  fileExists(`images/${filename}.jpg`, (err, exists) => {
    try {
      if (exists) {
        next()
      } else {
        res.render('error', { message: 'error!' })
      }
    } catch {
      console.log(err)
      res.render('error')
    }
  })
}

const checker = (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const w: number = Number(req.query.width)
  const h: number = Number(req.query.height)
  const fileName: string = req.query.filename as string
  const completedFileName: string = fileName + '_' + w + '_' + h

  fileExists(`resizedImages/${completedFileName}.jpg`, (err, exists) => {
    try {
      if (exists) {
        console.log('checker try if')
        console.log('---------------')

        next()
      } else {
        console.log('checker try else')
        console.log('---------------')

        resize(fileName, w, h).then(() => {
          next()
        })
      }
    } catch {
      console.log(err)
      res.render('error')
    }
  })
}

export { validator, checker }
