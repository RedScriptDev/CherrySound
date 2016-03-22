onst $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const SongModel = require('../models/SongModel');

const SongsCollection = Backbone.Collection.extend({
    model: SongModel
});

module.exports = SongsCollection;
