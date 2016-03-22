const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

var AppLayout = require("./views/AppLayout");

var Controller = Mn.Object.extend({
    initialize: function() {
        var appLayout = new AppLayout();
        appLayout.render();
        this.options.layout = appLayout;
    },
    index: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:index');
    },
    about: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:about');
    },
    services: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:services');
    },
    media: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:media');
    },
    news: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:news');
    },
    contact: function() {
        var layout = this.getOption('layout');
        layout.triggerMethod('show:contact');
    }
});

module.exports = Controller;