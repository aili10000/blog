var express = require('express')
var app = express()
var router = require('./router.js')
var bodyParser = require('body-parser')


app.use('/public',express.static('public'))
app.use('/node_modules',express.static('./node_modules'))
//默认为模板文件夹为views文件夹
app.engine('html', require('express-art-template'));




//bodyparse一定要在router之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(3000,function(){
	console.log("service is start......")
})
