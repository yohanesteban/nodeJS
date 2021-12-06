const express = require('express')
const mongose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors)

mongoose.connect(process.env.MONGO_URI,  { useNewURLParser: true, useUnifiedTopology: true})

app.get('*', (req, res) => {
res, send('chanchito feliz')
})
module, exports = app