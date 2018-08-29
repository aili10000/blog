var express = require('express')
var Users = require('./model/users.js')
var router = express.Router()



router.get('/',function(req,res){
	res.render('index.html')
})


router.get('/register',function(req,res){
	res.render('register.html')
})

router.post('/register',function(req,res){
	Users.find(function(err,ret) {
		res.send(ret)
	})

})


module.exports = router