const express = require('express')
const app = express()
const {errorHandler} = require('./middleware/error-middleware')
const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/projects', require('./routes/projects-routes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  // run().catch(console.dir);
})