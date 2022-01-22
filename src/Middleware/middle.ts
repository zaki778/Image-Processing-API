import { resize } from '../utillities/resizeFunc'
import express from 'express'
import fileExists from 'file-exists'



const validator0 = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {

  const filename: string = req.query.filename as string
  
  const w: string = req.query.width as string
  const h: string = req.query.height as string

  if(w == '' || h == '' || filename ==''){
    res.render('error', {message : 'Missing Fields!'})
  }
  else{
    next();
  }

}


const validator1 = (
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
        res.render('error', { message: 'Invalid Input for file name : Image not found!' })
      }
    } catch {
      res.render('error', { message: err })
    }
  })
}

const validator2 = (
   req: express.Request,
  res: express.Response,
  next: Function
  ) : void =>{

    const w: number = Number(req.query.width)
    const h: number = Number(req.query.height)

    
    if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0){
      res.render('error', {message : 'Invalid Input for width/height'})
    }
    else{
      next();
    }

} 

const  checker =  (
  req: express.Request,
  res: express.Response,
  next: Function
) : void => {
  const w: number = Number(req.query.width)
  const h: number = Number(req.query.height)
  const fileName: string = req.query.filename as string
  const completedFileName: string = fileName + '_' + w + '_' + h

  fileExists(`resizedImages/${completedFileName}.jpg`, async (err, exists) => {
    try {
      if (exists) {
        next()
      } else {

        // resize(fileName, w, h).then(() => {
        //   next()
        // })

     const ret  =  await resize(fileName, w, h);
          if(ret) next();

      }
    } catch {
      res.render('error', { message: err })
    }
  })
}

export {validator0, validator1, validator2, checker }
