var mongoose = require('mongoose')
	,Schema = mongoose.Schema
	,ObjectId = Schema.ObjectId

var userSchema = new Schema({
	_id: ObjectId,
	name: String,
	pwd: String,
	roles: [ObjectId]
});

var roleSchema = new Schema({
	_id: ObjectId,
	name: String,
	desc: String,
	funcs: [ObjectId]
});

var funcSchema = new Schema({
	_id: ObjectId,
	name: String,
	desc: String
});

var UserModel = mongoose.model('User', userSchema);
var RoleModel = mongoose.model('Role', roleSchema);
var FuncModel = mongoose.model('Func', funcSchema);

exports.UserModel = UserModel;
exports.RoleModel = RoleModel;
exports.FuncModel = FuncModel;