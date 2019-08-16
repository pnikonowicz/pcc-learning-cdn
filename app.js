const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.listen(PORT,function(){
    console.log('Server is running at PORT:',PORT);
})

app.use(express.static('public'))
