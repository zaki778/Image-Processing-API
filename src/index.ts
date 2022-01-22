import express from 'express'
import resizeRoute from './routes/resizeRoute'

const app = express()
const port = 4800

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`)
})

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/resizeImage', resizeRoute)

export default app
