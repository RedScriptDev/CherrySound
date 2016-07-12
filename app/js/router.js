const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const Controller = require('./controller');

var Router = Mn.AppRouter.extend({
	controller: new Controller(),

    appRoutes: {
        '': 'index',
        'about':'about',
        'services':'services',
        'media':'media',
        'news':'news',
        'contact':'contact',
        'search':'search'
    }
});

module.exports = Router;