const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const App = new Mn.Application();

const template = require('../templates/Services.hbs');

const ServicesView = Mn.LayoutView.extend({
    template: template,
    regions: {}
});

module.exports = ServicesView;