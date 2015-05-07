var _ = require('underscore');
var models = require('../models');

var Tile =  models.Tile.TileModel;

var makerPage = function(req, res) {

	Tile.findAll(function(err, docs) {
		if(err) {
			console.log(err);
			return res.status(400).json({error: 'An error occurred'});
		}	
		res.render('app', {tiles: docs});	
	});
   
};

var myTilesPage = function(req, res) {

	Tile.findByName( req.session.account._id , function(err, docs) {
		if(err){
			console.log(err);
			return res.status(400).json({ error: 'An error occurred'});
		}
		res.render('myTiles', {tiles: docs});
	});

};

var makeTile = function(req, res) {
	if(!req.body.url || !req.body.tags) {
		return res.status(400).json({error: "Both url and tags are needed"});
	}

	var tileData = {
		url: req.body.url,
		tags: req.body.tags,
		owner: req.session.account._id
	};

	var newTile = new Tile(tileData);
	
	newTile.save(function(err) {
		if(err) {
			console.log(err);
			return res.status(400).json({error: 'An error occurred'});
		}

		res.json({redirect: '/maker'});
	});
};




module.exports.makerPage = makerPage;
module.exports.myTilesPage = myTilesPage;
module.exports.make = makeTile;