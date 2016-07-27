const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const template = require('../templates/Search.hbs');
const SongItemView = require('./SongItemView');
const SongsCollection = require('../collections/SongsCollection');

const SearchView = Mn.CompositeView.extend({
    template: template,
    childView: SongItemView,
    childViewContainer: '.results',
    collection: new SongsCollection(),
    ui: {
        artistInput: '#artist-input',
        songInput: '#song-input',
        searchSubmit: '.submit-button',
        noResults: '.no-results'
    },
    events: {
        "click @ui.searchSubmit": "submitSearch",
        "keyup @ui.artistInput": "keyPressHandler",
        "keyup @ui.songInput": "keyPressHandler"
    },
    collectionEvents:{
        "reset":"checkResults"
    },
    keyPressHandler: function(e) {
        if (event.keyCode == 13) {
            this.ui.searchSubmit.click();
        }
    },
    submitSearch: function() {
        let artist = this.ui.artistInput.val().trim(),
            song = this.ui.songInput.val().trim();

        this.collection.fetch({
            data: {
                artist: artist,
                song: song
            },
            reset: true
        })
    },
    checkResults:function(){
        if(this.collection.length === 0){
            this.ui.noResults.show()
        } else {
            this.ui.noResults.hide()
        }
    }
});

module.exports = SearchView;
