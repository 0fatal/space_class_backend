const PingApi = require('../api/HelloWorld')

module.exports = {
    initRouter(r) {
        r.get('/ping', PingApi.ping)
    },
}
