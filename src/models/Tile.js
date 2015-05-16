var mongoose = require('mongoose');
var _ = require('underscore');

var TileModel;

var TileSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
		trim: true
	},

	tags: {
		type: String,
		required: true,
		trim: true
	},

	owner: {
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},

	createdData: {
		type: Date,
		default: Date.now,
		// This is where I tell it it's ttl
		expires: 3600
	}

});

TileSchema.methods.toAPI = function() {
	return {
		url: this.url,
		tags: this.tags
	};
};

TileSchema.statics.findByName = function(ownerId, callback) {
	var search = {
		owner: mongoose.Types.ObjectId(ownerId)
	};

	return TileModel.find(search).select("url tags").exec(callback);
};

/*
TileSchema.statics.findByTag = function(tags, callback) {
	var search = {
		tags: mongoose.Types.ObjectId(tags)
	};

	return TileModel.find(search).select("url tags").exec(callback);
};
*/

TileSchema.statics.findAll = function(callback) {
	return TileModel.find().select("url tags").exec(callback);
};


TileModel = mongoose.model('Tile', TileSchema);


module.exports.TileModel = TileModel;
module.exports.TileSchema = TileSchema;