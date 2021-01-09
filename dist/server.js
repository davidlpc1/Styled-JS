const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.use('/',(req,res,next) => {
    return res.sendFile(path.join(__dirname,'index.html'))
})

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
      error:{
        mensage: error.message
      }
    })
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})