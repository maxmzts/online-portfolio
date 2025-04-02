const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const {errorHandler} = require('./middleware/error-middleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/projects', require('./routes/project-routes'))
app.use('/api/users', require('./routes/user-routes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})