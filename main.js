const express = require('express')
require('express-async-errors')
const app = express()
const bodyParser = require('body-parser')
const { initRouter } = require('./router')
const cors = require('cors')
const ExceptionFallbackMiddleware = require('./middleware/exception')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors()) // 处理跨域

const router = express.Router()
initRouter(router)

app.use('/class', router)
app.use(ExceptionFallbackMiddleware)

// 这里一般不用改
const port = 30010

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})
