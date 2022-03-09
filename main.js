const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { initRouter } = require('./router')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const router = express.Router()
initRouter(router)

app.use('/', router)

// 这里一般不用改

app.listen(30010, () => {
    console.log(`Example app listening on port 30010!`)
})
