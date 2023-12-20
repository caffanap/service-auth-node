class HelloController {
    checkApp(req, res, next) {
        res.status(200).send({
            message: "OK!"
        })
    }
}


module.exports = new HelloController()