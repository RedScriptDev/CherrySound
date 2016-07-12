const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const template = require('../templates/About.hbs');

const AboutView = Mn.LayoutView.extend({
    template: template,
    regions: {}
});

module.exports = AboutView;