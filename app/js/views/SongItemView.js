const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const template = require('../templates/SongItem.hbs');

const SongItemView = Mn.ItemView.extend({
    template: template
});

module.exports = SongItemView;