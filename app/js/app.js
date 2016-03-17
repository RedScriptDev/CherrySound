const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const App = new Mn.Application();

Backbone.$ = $;
window.App = App;


App.on('start', function() {
    Backbone.history.start();
});

$(document).ready(function() {
    App.start();
    console.log("Starting...");
});
