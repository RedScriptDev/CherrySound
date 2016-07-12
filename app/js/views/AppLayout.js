const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const template = require('../templates/AppLayout.hbs');

const HomePageView = require('./HomePageView');
const AboutView = require('./AboutView');
const ServicesView = require('./ServicesView');
const MediaView = require('./MediaView');
const NewsView = require('./NewsView');
const ContactView = require('./ContactView');
const SearchView = require('./SearchView');


const AppLayout = Mn.LayoutView.extend({
    template: template,
    el: ".app",
    regions: {
        main: '.app__container'
    },
    onShowIndex: function() {
        var homePageView = new HomePageView();
        this.showChildView('main', homePageView);
    },
    onShowAbout: function() {
        var aboutView = new AboutView();
        this.showChildView('main', aboutView);
    },
    onShowServices: function() {
        var servicesView = new ServicesView();
        this.showChildView('main', servicesView);
    },
    onShowMedia: function() {
        var mediaView = new MediaView();
        this.showChildView('main', mediaView);
    },
    onShowNews: function() {
        var newsView = new NewsView();
        this.showChildView('main', newsView);
    },
    onShowContact: function() {
        var contactView = new ContactView();
        this.showChildView('main', contactView);
    },
    onShowSearch: function() {
        var searchView = new SearchView();
        this.showChildView('main', searchView);
    },
});

module.exports = AppLayout;