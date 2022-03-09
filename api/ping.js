function ping(req, res) {
    res.send('pong')
}

function pingPost(req, res) {
    res.send('pong' + ' ' + req.body)
}

module.exports = {
    ping,
    pingPost,
}
