var mongoose = require('mongoose')

var AuthModel = require('./auth_model')
	, Users = AuthModel.UserModel
	, Roles = AuthModel.RoleModel
	, Funcs = AuthModel.FuncModel

exports.getUserById = function (userId, callback) {
	Users.findOne({
		_id : mongoose.Types.ObjectId(userId),
		function (err, user) {
			callback(err, user);
		}
	});
};