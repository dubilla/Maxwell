/* global define, db */
define([
	'jquery',
	'underscore',
	'backbone',
	'views/entry',
	'collections/entries'
], function($, _, Backbone, EntryView, Entries) {
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#maxwell',
		events: {
			// TODO: change this to displayGraph
			'click a.entry-name': 'createEntryGraph'
		},
		initialize: function() {
			this.listenTo(Entries, 'add', this.loadGraph);
		},
		createEntryGraph: function(e) {
			e.preventDefault();
			Entries.create(this.newAttributes(e));
		},
		loadGraph: function(e, entry) {
			var view = new EntryView({ model: entry });
			$('.hero-unit').after(view.render().el);
		},
		newAttributes: function(e) {
			var $target = $(e.target);
			return db[$target.data('name')];
		}
	});

	return AppView;
});