var mongoose = require('mongoose');
var _ = require('underscore');

var tileModel;


var TileSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true,
		trim: true,
		set: setName
	},

	age: {
		type: Number,
		min: 0,
		required: true
	},

	owner: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},

	createdData: {
		type: Date,
		default: Date.now
	}

});

TileSchema.methods.toAPI = function() {
	return {
		name: this.name,
		age: this.age
	};
};

TileSchema.statics.findByName = function(name, callback) {
	var search = {
		owner: mongoose.Types.ObjectId(ownderId)
	};

	return TileModel.find(search).select("name age").exec(callback);
};


TileModel = mongoose.model('Tile', TileSchema);


module.exports.TileModel = TileModel;
module.exports.TileSchema = TileSchema;