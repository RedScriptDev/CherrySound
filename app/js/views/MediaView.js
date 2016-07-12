const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const Instafeed = require("instafeed.js");

const template = require('../templates/Media.hbs');

const MediaView = Mn.LayoutView.extend({
    template: template,
    regions: {},
    initialize: function() {
        var instafeed = new Instafeed({
            get: 'user',
            userId: "3001634870",
            accessToken: "3001634870.ff84a7b.a41c79ad2d284429a29397e91c6ee7e1",
            target: "instagallery",
            resolution:"standard_resolution",
            template: '<div class="instaimage col-xs-6 col-sm-3"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
        });

        instafeed.run();
    }
});

module.exports = MediaView;