/* global define */
define([
	'jquery',
	'backbone',
	'backboneLocalstorage',
	'models/entry'
], function($, Backbone, Store, Entry) {
	'use strict';

	var EntriesCollection = Backbone.Collection.extend({
		model: Entry,
		localStorage: new Store('maxwell')
	});

	return new EntriesCollection();
});