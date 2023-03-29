'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const userRoutes = require('./routes/user-routes')
const userCPRoutes = require('./routes/usercp-routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api', userRoutes.routes)
app.use('/api', userCPRoutes.routes)

app.listen(config.port, () => console.log('App is listening on url https://localhost:' + config.port))