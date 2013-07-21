/* global define */
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/entry.html',
	'chart'
], function($, _, Backbone, entryTemplate, Chart) {
	'use strict';

	var EntryView = Backbone.View.extend({
		template: _.template(entryTemplate),
		loadChart: function($wrapper, data) {
			//Get context with jQuery - using jQuery's .get() method.
			var ctx = $wrapper.find('#myChart').get(0).getContext('2d');
			//This will get the first returned node in the jQuery collection.
			new Chart(ctx).Line(data);
		},
		render: function() {
			// TODO: This cannot be the proper syntax
			var graphingData = this.model.models[0].createGraphingData(this.model.models[0].attributes.data);
			this.$el.html(this.template());
			this.loadChart(this.$el, graphingData);
			return this;
		}
	});

	return EntryView;
});