const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const SongsModel = Backbone.Model.extend({
	idAttribute:"songID",
	defaults:{
		artistName:"",
		songName:""
	}
});

module.exports = SongsModel;