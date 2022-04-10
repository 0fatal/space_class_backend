const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { initRouter } = require('./router')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors()) // 处理跨域

const router = express.Router()
initRouter(router)

app.use('/class', router)

// 这里一般不用改
const port = 30010

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})
