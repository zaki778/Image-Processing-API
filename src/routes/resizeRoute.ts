import express from 'express'
import { validator, checker } from '../Middleware/middle'
import path from 'path'

const router = express.Router()

const middle = [validator, checker]

router.use(middle)

router.get(
  '/',
  middle,
  (
    req: { query: { width: any; height: any; filename: string } },
    res: { sendFile: (arg0: string) => void }
  ) => {
    const w: number = Number(req.query.width)
    const h: number = Number(req.query.height)
    const fileName: string = req.query.filename as string
    const newFileName: string = fileName + '_' + w + '_' + h

    res.sendFile(path.resolve(`resizedImages/${newFileName}.jpg`))
  }
)

export default router
