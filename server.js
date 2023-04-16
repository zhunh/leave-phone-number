var express = require("express")
var app = express()

app.get('/hi', function (req, res) {
    res.send('hello world')
})

app.use(express.static('doc'))

app.listen('3000', () => {
    console.log("正在监听3000端口")
})