var _ = require('underscore');
var models = require('../models');

var Tile =  model.Domo;

var makerPage = function(req, res) {

	Tile.TileModel.findByOwner(req.session.account._id, function(err, docs) {
		if(err) {
			console.log(err);
			return res.status(400).json({error: 'An error occurred'});
		}		
	})
    res.render('app', {tiles: docs});
};

var makeTile = function(req, res) {

	if(!req.body.name || !req.body.age) {
		return res.status(400).json({error: "Both name and age are needed"});
	}

	var tileData = {
		name: req.body.name,
		age: req.body.age,
		owner: req.session.account._id
	};

	var newTitle = new Tile.TileModel(tileData);

	newTile.save(function(err) {
		if(err) {
			console.log(err);
			return res.status(400).json({error: 'An error occurred'});
		}

		res.json({redirect: '/maker'});
	});
};




module.exports.makerPage = makerPage;
module.exports.make = makeTile;