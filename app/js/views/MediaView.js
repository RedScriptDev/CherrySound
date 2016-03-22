const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const App = new Mn.Application();
const Instafeed = require("instafeed.js");

const template = require('../templates/Media.hbs');

const MediaView = Mn.LayoutView.extend({
    template: template,
    regions: {},
    initialize: function() {
        var instafeed = new Instafeed({
            get: 'user',
            userId: "3001634870",
            clientId: "ff84a7b298b6470c95229ec3c0e410bf",
        });
        console.log("instafeed");
        console.log(instafeed.run());
    }
});

module.exports = MediaView;