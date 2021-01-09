const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.use('/',(req,res,next) => {
    return res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})