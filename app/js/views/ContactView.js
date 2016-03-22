const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const App = new Mn.Application();

const template = require('../templates/Contact.hbs');

const ContactView = Mn.LayoutView.extend({
    template: template,
    regions: {}
});

module.exports = ContactView;