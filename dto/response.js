class R {
    code
    msg
    data

    constructor({code, msg, data}) {
        this.code = code
        this.msg = msg
        this.data = data
    }

    static success(data = null) {
        return new R({
            code: 0,
            msg: 'success',
            data: data
        })
    }

    static fail(errMsg = 'failed') {
        return new R({
            code: -1,
            msg: errMsg,
            data: null
        })
    }

    send(res) {
        res.send({
            code: this.code,
            msg: this.msg,
            data: this.data
        })
    }
}

module.exports.R = R