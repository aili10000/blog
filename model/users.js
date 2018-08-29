var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db1',function(err){
	if(err){
		console.log('连接失败')
	}else{
		console.log('连接成功')
	}
});

var Schema = mongoose.Schema;
var userSchema = new Schema(
	{
		email: {
			type: String,
			required: true
		},
		nickname: {
			type:String
		},
		password:{
			type:String
		}
	}
)

module.exports = mongoose.model('User',userSchema)
